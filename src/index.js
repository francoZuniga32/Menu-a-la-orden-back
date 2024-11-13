const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { expressJoiValidations } = require('express-joi-validations');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

app.use(expressJoiValidations());

let usuario = require('./app/Usuario/route');
let upload = require('./app/Archivo/route')
let menus = require('./app/Menu/route');

app.use("/usuario", usuario);
app.use("/upload", upload);
app.use("/menus", menus);

app.listen(3001, ()=>{
    console.log("listen in port 3001")
})
