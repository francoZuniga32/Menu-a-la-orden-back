const controller = {};
const db = require("../db");


controller.get = async function(req, res){
    let data = await db.find("menus", x => true);
    res.send(data);
}

controller.one = async function(req, res){
    let id = req.params.id;

    let data = await db.find("menus", x => x.id == id);
    res.send(data[0]);
}

controller.post = async function(req, res){
    let {nombre, template, items} = req.body;
    console.log(nombre, template, items);
    if(nombre && template && items){
        await db.add("menus", req.body);
        res.status(201).send();
    }else{
        res.status(400).send({err: "falta el nombre, o el templete o los items"});
    }

}

module.exports = controller;