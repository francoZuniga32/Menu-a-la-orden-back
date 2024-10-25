const route = require("express").Router();
const controller = require("./controller");

route.get("/", controller.all);
route.get("/:id", controller.one);
route.post("/", controller.create);
route.put("/:id", controller.alter);
route.delete("/:id", controller.delete);

module.exports = route;
