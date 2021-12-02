const Router = require('express');
const dataRouter = new Router();
const controller = require('./dataController');

dataRouter.post('/', controller.postData);
dataRouter.get('/', controller.getData);
dataRouter.get(/\/*/, controller.getDataByName);

module.exports = { dataRouter };
