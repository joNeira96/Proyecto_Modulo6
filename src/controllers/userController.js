const User = require("../models/users.js");

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

// 🔥 AGREGAR ESTO

// PUT
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.update(req.body, {
            where: { id }
        });

        res.json({ message: "Usuario actualizado" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.destroy({
            where: { id }
        });

        res.json({ message: "Usuario eliminado" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};