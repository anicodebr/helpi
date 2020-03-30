const routes = require("express").Router();
const reportController = require('../controllers/reportController');

routes.get('/acessos', reportController.listAcesso)

module.exports = routes;