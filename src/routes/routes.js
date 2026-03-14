const express = require("express");
const router = express.Router();
const fs = require("fs");

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

module.exports = router;
