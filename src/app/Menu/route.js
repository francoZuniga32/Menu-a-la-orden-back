const validate = require("../../middleware/validate");

const route = require("express").Router();
const controller = require("./controller");
const validaciones = require("./validate");

const auth = require('../../middleware/auth');

route.get("/", controller.get);
route.get("/:id", controller.one);
route.get("/usuario/:id", controller.usuario);

route.post("/", validate(validaciones.menu), auth, controller.post);
route.put('/:id', validate(validaciones.menu), auth,controller.put);

route.post("/items/", validate(validaciones.items),  auth, controller.addItem);
route.delete("/items/", validate(validaciones.items), auth, controller.removeItem);

route.delete('/:id', auth, controller.remove);

module.exports = route;
