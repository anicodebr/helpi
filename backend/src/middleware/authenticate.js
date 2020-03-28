const jwt = require("jsonwebtoken");

module.exports = async (req,res,next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send(null);

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).send(null);

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
};