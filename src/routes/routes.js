const express = require("express");
const router = express.Router();
const fs = require("fs");

// modelos
const User = require("../models/User");
const sequelize = require("../config/database");

// función log
function registrarAcceso(ruta) {
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    const registro = `${fecha} - ${hora} - Ruta: ${ruta}\n`;

    fs.appendFile("logs/log.txt", registro, (err) => {
        if (err) console.error(err);
    });
}

// RUTAS (MÓDULO 6)


router.get("/", (req, res) => {
    registrarAcceso("/");

    res.render("index", {
        titulo: "Servidor Node.js",
        mensaje: "Vista dinámica usando EJS"
    });
});

router.get("/status", (req, res) => {
    registrarAcceso("/status");

    res.json({
        status: "ok",
        message: "Servidor funcionando correctamente"
    });
});



// CRUD (MÓDULO 7)
// actualizado manejo de errores + mensajes


// GET con filtro opcional
router.get("/usuarios", async (req, res) => {
    registrarAcceso("/usuarios");

    try {
        const { nombre } = req.query;

        let users;

        if (nombre) {
            users = await User.findAll({
                where: { nombre }
            });
        } else {
            users = await User.findAll();
        }

        res.json(users);

    } catch (error) {
        res.status(500).json({
            message: "Error al obtener usuarios",
            error: error.message
        });
    }
});


// POST (con validación)
router.post("/usuarios", async (req, res) => {
    registrarAcceso("POST /usuarios");

    try {
        const { nombre, email } = req.body;

        // validación
        if (!nombre || !email) {
            return res.status(400).json({
                message: "Nombre y email son obligatorios"
            });
        }

        const user = await User.create({ nombre, email });

        res.status(201).json({
            message: "Usuario creado",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al crear usuario",
            error: error.message
        });
    }
});


// PUT (actualizar)
router.put("/usuarios/:id", async (req, res) => {
    registrarAcceso("PUT /usuarios");

    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id }
        });

        if (!updated) {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }

        res.json({
            message: "Usuario actualizado"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar usuario",
            error: error.message
        });
    }
});


// DELETE (eliminar)
router.delete("/usuarios/:id", async (req, res) => {
    registrarAcceso("DELETE /usuarios");

    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });

        if (!deleted) {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }

        res.json({
            message: "Usuario eliminado"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar usuario",
            error: error.message
        });
    }
});



// TRANSACCIÓN (PLUS)


router.post("/registro-completo", async (req, res) => {
    registrarAcceso("POST /registro-completo");

    const t = await sequelize.transaction();

    try {
        const user = await User.create(req.body, { transaction: t });

        if (!user) throw new Error("Error en registro");

        await t.commit();

        res.json({
            message: "Registro exitoso",
            data: user
        });

    } catch (error) {
        await t.rollback();

        res.status(500).json({
            message: "Error, rollback ejecutado",
            error: error.message
        });
    }
});

module.exports = router;