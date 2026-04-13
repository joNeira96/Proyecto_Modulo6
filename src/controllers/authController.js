const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email requerido" });
    }

    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
};