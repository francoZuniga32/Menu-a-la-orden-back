const route = require("express").Router();
const controller = require("./controller");
const validaciones = require("./validate");
const validate = require("../../middleware/validate");
const auth = require('../../middleware/auth');

//route.get("/", controller.all);
//route.get("/:id", controller.one);
route.post("/", validate(validaciones.alta), auth, controller.create);
route.put("/:id", validate(validaciones.alta), auth, controller.alter);
route.delete("/:id", auth, controller.delete);

route.post("/login",validate(validaciones.register), controller.login);

module.exports = route;
