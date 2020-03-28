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
        
    },
    async show(req,res){
        
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

    },
    async destroy(req,res){

    },
}