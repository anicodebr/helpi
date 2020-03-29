const { Acessos } = require('../models');


module.exports = { 
  async report(req,res){
    acessos.findAll({
      attributes: [ 'id', 'createdAt' ]
    })
    .then(acessos => {
      acessos?
      res.status(200).json(Acessos):
      res.status(404).json(null)


    })
  }
}