const routes = require("express").Router();
const entregadorController = require('../controllers/entregadorController');
const authMiddleware = require("../middleware/authenticate");

// routes.use(authMiddleware); // Middleware JWT para verificação do TOKEN ~~~~~~~~RETIRADO TEMPORÁRIAMENTE~~~~~~~~

routes.get('/not-authorized', entregadorController.getListNotAuthorized); // Rota para pegar todos os entregadores autorizados
routes.get('/authorized', entregadorController.getListAuthorized); // Rota para pegar todos entregadores não autorizados
routes.get('/:id', entregadorController.getEntregador); // Rota para pegar todos os dados de um entregador

module.exports = routes;