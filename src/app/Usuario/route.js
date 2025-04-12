const route = require("express").Router();
const controller = require("./controller");
const validaciones = require("./validate");
const validate = require("../../middleware/validate");


//route.get("/", controller.all);
//route.get("/:id", controller.one);
route.post("/", validate(validaciones.alta), controller.create);
route.put("/:id", validate(validaciones.alta), controller.alter);
route.delete("/:id", controller.delete);
route.post("/login",validate(validaciones.register), controller.login);

module.exports = route;
