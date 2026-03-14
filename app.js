require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./src/routes/routes");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
