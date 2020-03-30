const jwt = require("jsonwebtoken");
const { User } = require('../models');

module.exports = async (req,res,next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send(null); // Retorna Não autorizado caso não tenha token

    jwt.verify(token, process.env.SECRET, (err, decoded) => { //Tenta verificar o código
        if (err) return res.status(401).send(null); ; // Cado a dê erro retorna não autorizado
        User.findByPk(decoded.id) // Se não retornou, verificar a existencia do usuário no banco de dados
        .then(async user => {
            if(!user)
                return res.status(401).send(null);//Se o usuário não foi encontrado, retorna não autorizado
            req.userId = decoded.id;//Salva para uso futuro
            next();//Finaliza as verificações e o uso das rotas abaixo do middleware
        })
    });
};