const validate = require("../../middleware/validate");

const route = require("express").Router();
const controller = require("./controller");
const validaciones = require("./validate");

route.get("/", controller.get);
route.get("/:id", controller.one);
route.post("/", validate(validaciones.post), controller.post);
route.put('/:id', validate(validaciones.post), controller.put);
route.delete('/:id', controller.remove);

module.exports = route;
