const { User } = require('../models');

module.exports ={
    async auth(req,res){
        
    },
    async index(req,res){

    },
    async show(req,res){

    },
    async store(req,res){
        User.findOrCreate({where: {email: req.body.email}, defaults: {password: req.body.password, name: req.body.name}})
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