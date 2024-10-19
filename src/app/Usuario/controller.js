const controller = {};
const db = require("../db");

controller.get = async function(req, res){
    let usuario = {
        "usuario": "franco",
        "pass": "pepe"
    };

    await db.add("usuarios", usuario);

    res.send("hola");
}

controller.remove = async (req, res)=>{
    await db.remove("usaurios", 1);
    res.send("eliminado")
}

controller.all = async (req, res)=>{
    res.json(await db.find("usuarios", x => x.id == 5));
}

module.exports = controller;