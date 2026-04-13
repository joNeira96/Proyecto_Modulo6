require("dotenv").config();

const express = require("express");
const app = express();

const sequelize = require("./src/config/database");
require("./src/models/users.js"); // 

const routes = require("./src/routes/routes");

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json()); // 
app.use(express.static("public"));

app.set("view engine", "ejs");

// rutas
app.use(routes);

// conexión + servidor
sequelize.sync()
    .then(() => {
        console.log("Tablas creadas");
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en http://localhost:${PORT}`);
        });
    })
    .catch(err => console.log("❌ Error:", err));