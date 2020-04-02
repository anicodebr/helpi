const { 
    User, Entregador
} = require('../models');
const { Op } = require("sequelize");

module.exports = {
    async getListNotAuthorized(req,res){
        User.findAll({ 
            attributes: [ 'id', 'name', 'email','createdAt'],
            include:{
                model: Entregador,
                attributes: [],
                where: {autorizado: false}
            },
            where: { [Op.not]: {
                EntregadorId: null
            }},
        }) 
        .then(users => {
            return res.status(200).json({users: users});
        }).catch(err => { console.error(err); return res.status(500).json(null); })
    },
    async getListAuthorized(req,res){
        User.findAll({ 
            attributes: [ 'id', 'name', 'email','createdAt'],
            include:{
                model: Entregador,
                attributes: [],
                where: {autorizado: true}
            },
            where: { [Op.not]: {
                EntregadorId: null
            }},
        }) 
        .then(users => {
            return res.status(200).json({users: users});
        }).catch(err => { console.error(err); return res.status(500).json(null); })         
    },
    async getEntregador(req,res){
        User.findByPk(req.params.id, { 
            attributes: [ 'id', 'name', 'email', "dt_nasc", "cpf", "tel", 'foto','createdAt','updatedAt'],
            where: { [Op.not]: {
                EntregadorId: null
            }},
            include: [Entregador]
        })
        .then(user => {
            if(!user)
                return res.status(404).json(null);
            return res.status(200).json(user);
        }).catch(err => { console.error(err); return res.status(500).json(null); })  
    }
}