const validate = require("../../middleware/validate");

const route = require("express").Router();
const controller = require("./controller");
const validaciones = require("./validate");

route.get("/", controller.get);
route.get("/:id", controller.one);

route.post("/", validate(validaciones.menu), controller.post);
route.put('/:id', validate(validaciones.menu), controller.put);

route.post("/items/", validate(validaciones.items), controller.addItem);
route.delete("/items/", validate(validaciones.items), controller.removeItem);

route.delete('/:id', controller.remove);

module.exports = route;
