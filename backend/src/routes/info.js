const routes = require("express").Router();
const infoController = require('../controllers/infoController');

routes.get('/report', infoController.report)

module.exports = routes;