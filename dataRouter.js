const Router = require('express');
const dataRouter = new Router();
const controller = require('./dataController');

dataRouter.post('/write', controller.postData);
dataRouter.get('/reade', controller.getData);
dataRouter.get(/reade\/:*/, controller.getDataByName);

module.exports = { dataRouter };
