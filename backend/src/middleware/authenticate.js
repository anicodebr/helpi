const jwt = require("jsonwebtoken");
const { User } = require('../models');

module.exports = async (req,res,next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send(null);

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).send(null);
        User.findByPk(decoded.id) // apenas verificando para ver se o usuário foi deletado e o token ta ativo
        .then(async user => {
            switch (user) {
                case null:
                    res.status(401).send(null);
                    break;
                default:
                    req.userId = decoded.id;
                    next();
                    break;
            }
        })
    });
};