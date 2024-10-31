const multer = require("multer");

const route = require("express").Router();

const upload = multer({ dest: 'uploads/' });

const controller = require('./controller');

route.post("/", controller.load);

module.exports = route;