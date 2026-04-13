const express = require("express");
const router = express.Router();
const fs = require("fs");
const User = require("../models/users.js");

// función log
function registrarAcceso(ruta) {
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    const registro = `${fecha} - ${hora} - Ruta: ${ruta}\n`;

    fs.appendFile("logs/log.txt", registro, (err) => {
        if (err) console.error(err);
    });
}

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



// CRUD Modulo 7 


// GET
router.get("/usuarios", async (req, res) => {
    registrarAcceso("/usuarios");

    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
});

// POST
router.post("/usuarios", async (req, res) => {
    registrarAcceso("POST /usuarios");

    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario" });
    }
});

// PUT
router.put("/usuarios/:id", async (req, res) => {
    registrarAcceso("PUT /usuarios");

    try {
        await User.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ message: "Usuario actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario" });
    }
});

// DELETE
router.delete("/usuarios/:id", async (req, res) => {
    registrarAcceso("DELETE /usuarios");

    try {
        await User.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario" });
    }
});

module.exports = router;