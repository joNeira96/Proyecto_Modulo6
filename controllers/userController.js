const User = require("../models/User");

// GET
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST
exports.createUser = async (req, res) => {
    try {
        const { nombre, email } = req.body;

        if (!nombre || !email) {
            return res.status(400).json({ message: "Datos obligatorios" });
        }

        const user = await User.create({ nombre, email });
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};