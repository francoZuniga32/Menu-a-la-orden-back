const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let usaurio = require('./app/Usuario/route');

app.use("/usuario", usaurio);

app.listen(3001, ()=>{
    console.log("listen in port 3001")
})
