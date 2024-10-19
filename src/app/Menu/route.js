const route = require("express").Router();
const controller = require("./controller");

route.get("/", controller.get);


module.exports = route;
