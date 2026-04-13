const express = require("express");
const router = express.Router();
const fs = require("fs");

// controllers
const userController = require("../controllers/userController.js");
const authController = require("../controllers/authController.js");

// middlewares
const authMiddleware = require("../middlewares/authMiddleware.js");

// upload
const multer = require("multer");

// configuración multer
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });



// FUNCIÓN LOG

function registrarAcceso(ruta) {
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    const registro = `${fecha} - ${hora} - Ruta: ${ruta}\n`;

    fs.appendFile("logs/log.txt", registro, (err) => {
        if (err) console.error(err);
    });
}



// RUTAS BASE (MÓDULO 6)


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



// AUTH (JWT)


router.post("/login", authController.login);



// CRUD USUARIOS (CONTROLLERS)


router.get("/usuarios", userController.getUsers);
router.post("/usuarios", userController.createUser);
router.put("/usuarios/:id", userController.updateUser);
router.delete("/usuarios/:id", userController.deleteUser);



// RUTAS PROTEGIDAS 


router.get("/perfil", authMiddleware, (req, res) => {
    res.json({
        message: "Ruta protegida",
        user: req.user
    });
});


// SUBIr DE ARCHIVOS


router.post("/upload", upload.single("file"), (req, res) => {
    registrarAcceso("POST /upload");

    if (!req.file) {
        return res.status(400).json({
            message: "No se subió ningún archivo"
        });
    }

    res.json({
        message: "Archivo subido correctamente",
        file: req.file
    });
});


module.exports = router;