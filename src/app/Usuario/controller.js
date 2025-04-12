const controller = {};
const db = require("../../db/source/db");
const Usaurio = require("../../db/models/Usuario");
const Usuario = require("../../db/models/Usuario");

const {DataTypes, where} = require('sequelize');
const sequelize = require('../../database/index.js');
const User = require('../../database/models/user')(sequelize, DataTypes);

controller.all = async (req, res)=>{
    res.json(await User.findAll());
}

controller.one = async(req, res)=>{
    res.json(await User.findOne({
        where : {
            id : req.params.id
        }
    }));
}

controller.create = async(req, res)=>{
    let usuario = req.body;
    await User.create(usuario);

    res.send(usuario);
}

controller.alter = async(req, res)=>{
    let usuario = req.body;
    console.log(req.params)

    let usaurioUpdate = await User.update(usuario,{
        where:{
            id: parseInt(req.params.id)
        }
    })
    res.send(usaurioUpdate);
}

controller.delete = async(req, res)=>{
    console.log(req.params.id);
    await User.delete({
        id: parseInt(req.params.id)
    })
    res.send();
}

 controller.login = async (req, res) => {
    const { username, password } = req.body; // esto separa las variables del req y las almacena en cada const username y password nashe
    console.log(username, password);
    var user = await User.findOne({
        where:{
            username: username,
            password: password
        }
    }) // esto esta feo e inseguro pero weno
    console.log(user);

    if (user) {
        res.status(200).json({ message: "Login exitoso" });
    } else {
        res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }
}; 

controller.nuevo = async (req, res)=>{
    res.send(await User.findAll())
}

module.exports = controller;