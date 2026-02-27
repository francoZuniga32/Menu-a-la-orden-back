const controller = {};
const db = require("../../db/source/db");
const Usuario = require("../../db/models/Usuario");

const {DataTypes} = require('sequelize');
const sequelize = require('../../database/index.js');
const User = require('../../database/models/user')(sequelize, DataTypes);

require('dotenv').config();

const jwt = require('jsonwebtoken');
const secretKey = process.env.key;

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
    try{
        let usuario = req.body;
        let existeUsuario = await User.findOne({
            where:{
                username: usuario.username
            }
        });
        if(!existeUsuario){
            await User.create({
                username: usuario.username,
                nombre: usuario.nombre,
                password: usuario.password,
                apellidos: usuario.apellidos,
                email: usuario.email
            });
            res.send(usuario);
        }else{
            res.status(400).json({err: `el usaurio con el nombre ${usuario.username} ya existe`});
        }
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
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
        const token = jwt.sign(
            { user: user },
            secretKey,
            { expiresIn: '1h' }
        );
        
        res.status(200).json({
            user: user,
            token: token
        });

    } else {
        res.status(403).json({ message: "Usuario o contraseña incorrectos" });
    }
}; 

controller.nuevo = async (req, res)=>{
    res.send(await User.findAll())
}

module.exports = controller;