const route = require("express").Router();
const controller = require("./controller");

route.get("/", controller.get);
route.get("/:id", controller.one);
route.post("/", controller.post);

module.exports = route;
