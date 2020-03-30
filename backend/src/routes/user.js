const routes = require("express").Router();
const UserController = require('../controllers/userController');
const authMiddleware = require("../middleware/authenticate");

routes.post('/auth', UserController.auth);
routes.post('/users', UserController.store);
routes.post('/admin/auth', UserController.authAdmin);
routes.post('/admin/create', UserController.storeAdmin);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

module.exports = routes;