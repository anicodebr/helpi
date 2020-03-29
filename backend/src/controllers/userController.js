const { User, Entregador, Cliente, Endereco } = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = async (id) => {
    return jwt.sign({ id: id }, process.env.SECRET,{
        expiresIn:86400
    });
}

const compareHash = async (pass, hash) => {
    return bcrypt.compareSync(pass, hash);
}

module.exports = {
    async auth(req,res){
        User.findOne({where:{email: req.body.email}})
        .then(async user => {
            await compareHash(req.body.password, user.dataValues.password)?
            res.status(200).json({
                id: user.dataValues.id,
                name: user.dataValues.name,
                token: await generateToken(user.dataValues.id)
            }):
            res.status(401).json(null)
        })
    },
    async index(req,res){
        User.findAll({ attributes: ['name', 'email', 'id', 'createdAt']})
        .then(users => {
            users?
            res.status(200).json(users):
            res.status(404).json(null)
        })
    },
    async show(req,res){
        User.findByPk(req.params.id, { 
            attributes: [ 'id', 'name', 'email', "dt_nasc", "cpf", "tel", 'foto','createdAt'],
            include: [Entregador, Cliente]
        })
        .then(user => {
            user?
            res.status(200).json(user):
            res.status(404).json(null)
        })
    },
    async store(req,res){
        let password = await bcrypt.hash(req.body.password,10);
        User.findOrCreate({where: {email: req.body.email}, defaults: {
            password: password, name: req.body.name, dt_nasc: new Date(req.body.dt_nasc), 
            cpf: req.body.cpf, tel: req.body.tel, foto: req.body.foto
        }})
        .then(([user, created]) => {
            let _user = user.get({plain: true})
            if(created){
                if(req.body.cliente){
                    Endereco.create({
                        endereco: req.body.endereco, numero: req.body.numero, cep: req.body.cep,
                        referencia: req.body.referencia, complemento: req.body.complemento,
                        uf: req.body.uf, bairro: req.body.bairro, cidade: req.body.cidade, pais: req.body.pais
                    }).then(async (endereco) => {
                        let _endereco = endereco.get({plain: true});
                        let _cliente = await Cliente.create({ EnderecoId: _endereco.id});
                        User.findOne({where: {id: _user.id}}, {attributes: ['ClienteId']})
                        .then(async () => {
                            user.ClienteId = _cliente.dataValues.id;
                            await user.save().then(() => {
                                res.status(200).json(null)
                            })
                        })
                    }).catch((err) => {
                        console.log(err)
                        res.status(500).json(null)
                    })
                }else{
                    Entregador.create({
                        rg_frente: req.body.rg_frente, rg_tras: req.body.rg_tras, descricao: req.body.descricao
                    }).then(async (entregador) => {
                        let _entregador = entregador.get({plain: true});
                        User.findOne({where: {id: _user.id}}, {attributes: ['EntregadorId']})
                        .then(async () => {
                            user.EntregadorId = _entregador.id;
                            await user.save().then(() => {
                                res.status(200).json(null)
                            })
                        })
                    })
                }
            }else{ res.status(401).json(null) }
        }).catch((err) => {
            console.log(err)
            res.status(500).json(null)
        })
    },
    async update(req,res){
        User.findOne({where: {id: req.params.id}}, { attributes: ['name', 'email', 'password', 'dt_nasc', 'cpf', 'tel']})
        .then(async user => {
            user.name       = req.body.name                             || user.name;
            user.email      = req.body.email                            || user.email;
            user.dt_nasc    = req.body.dt_nasc                          || user.dt_nasc;
            user.cpf        = req.body.cpf                              || user.cpf;
            user.tel        = req.body.tel                              || user.tel;
            user.password   = req.body.password? await bcrypt.hash(req.body.password,10):user.password
            await user.save().then(user => user?
                res.status(200).json(null):
                res.status(401).json(null))
        })
    },
    async destroy(req,res){
        User.destroy({where: {id: req.params.id }})
        .then(user => {
            user?
            res.status(200).json(null):
            res.status(401).json(null)
        })
    },
}