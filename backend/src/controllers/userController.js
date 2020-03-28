const { User } = require('../models');
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
        User.findByPk(req.params.id, { attributes: ['name', 'email', 'id', 'createdAt']})
        .then(user => {
            user?
            res.status(200).json(user):
            res.status(404).json(null)
        })
    },
    async store(req,res){
        let password = await bcrypt.hash(req.body.password,10);
        User.findOrCreate({where: {email: req.body.email}, defaults: {password: password, name: req.body.name}})
        .then(([user, created]) => {
            console.log(user.get({
                plain: true
            }))
            created?
            res.status(200).json(null):
            res.status(401).json(null)
        })
    },
    async update(req,res){
        User.findOne({where: {id: req.params.id}}, { attributes: ['name', 'email', 'password']})
        .then(async user => {
            user.name       = req.body.name                             || user.name;
            user.email      = req.body.email                            || user.email;
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