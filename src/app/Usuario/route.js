const route = require("express").Router();
const controller = require("./controller");

route.get("/", controller.get);
route.get("/eliminar", controller.remove);
route.get("/all", controller.all);

module.exports = route;
