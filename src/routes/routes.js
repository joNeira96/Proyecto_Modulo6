const express = require("express");
const router = express.Router();
const fs = require("fs");

// controllers
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// middleware
const authMiddleware = require("../middlewares/authMiddleware");

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



// AUTH (JWT)


router.post("/login", authController.login);



//  RUTA PROTEGIDA 


router.get("/api/perfil", authMiddleware, (req, res) => {
    registrarAcceso("/api/perfil");

    res.json({
        message: "Ruta protegida",
        user: req.user
    });
});



// CRUD USUARIOS (CONTROLLERS)


router.get("/usuarios", userController.getUsers);
router.post("/usuarios", userController.createUser);
router.put("/usuarios/:id", userController.updateUser);
router.delete("/usuarios/:id", userController.deleteUser);



// UPLOAD


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



// RUTAS WEB 


router.get("/status", (req, res) => {
    registrarAcceso("/status");

    res.json({
        status: "ok",
        message: "Servidor funcionando correctamente"
    });
});

router.get("/", (req, res) => {
    registrarAcceso("/");

    res.render("index", {
        titulo: "Servidor Node.js",
        mensaje: "Vista dinámica usando EJS"
    });
});


module.exports = router;