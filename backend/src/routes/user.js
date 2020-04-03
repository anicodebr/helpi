const routes = require("express").Router();
const UserController = require('../controllers/userController');
const authMiddleware = require("../middleware/authenticate");

routes.post('/auth', UserController.auth); //Rota para login de usuário comum
routes.post('/users', UserController.store); //Rota para registro de usuário comum
routes.post('/admin/auth', UserController.authAdmin); // Rota para login de Administradores
routes.post('/admin/create', UserController.storeAdmin); // Rota para Criação de Administradores

// routes.use(authMiddleware); // Middleware JWT para verificação do TOKEN ~~~~~~~~RETIRADO TEMPORÁRIAMENTE~~~~~~~~

routes.get('/users', UserController.index); // Rota para retornar todos os usuários.
routes.get('/users/:id', UserController.show); // Rota para retornar todos os dados de um único usuário representado por <id>
routes.put('/users/:id', UserController.update); // Rota para update no usuário dono de respectivo <id>, apenas atualiza o que for enviado.
routes.delete('/users/:id', UserController.destroy); // Rota para destruir todos os dados relacionados a determinado usuário

module.exports = routes;