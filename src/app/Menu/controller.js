const controller = {};
const db = require("../../db/source/db");

const Menus = require("../../db/models/Menu");

controller.get = async function(req, res){
    let data = await Menus.get(x => true);
    res.send(data);
}

controller.one = async function(req, res){
    let id = req.params.id;

    let data = await Menus.get(x => x.id == id);
    res.send(data[0]);
}

controller.post = async function(req, res){
    await Menus.add(req.body);
    res.status(201).send();
}

controller.put = async function(req, res){
    let menu = await Menus.update(req.params.id, req.body);
    res.send(menu);
}

controller.remove = async(req, res)=>{
    let menu = await Menus.remove(req.params.id);
    menu ? res.send() : res.status(400).json({err: "el menu con el id "+req.params.id+" no existe"});
}

module.exports = controller;