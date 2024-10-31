const controller = {};
const db = require("../db");


controller.all = async (req, res)=>{
    res.json(await db.find("usuarios", x => true));
}

controller.one = async(req, res)=>{
    res.json(await db.find("usuarios", x => x.id == req.params.id));
}

controller.create = async(req, res)=>{
    let usuario = req.body;
    await db.add("usuarios", usuario);

    res.send(usuario);
}

controller.alter = async(req, res)=>{
    let usuario = req.body;
    console.log(req.params)
    await db.update("usuarios", req.params.id, usuario);
    res.send(usuario);
}

controller.delete = async(req, res)=>{
    console.log(req.params.id);
    await db.remove("usuarios", req.params.id);
    res.send();
}

module.exports = controller;