const controller = {};

const {DataTypes, where} = require('sequelize');
const sequelize = require('../../database/index.js');

const Menu = require('../../database/models/menu')(sequelize, DataTypes);
const Items = require('../../database/models/items')(sequelize, DataTypes);

Menu.hasMany(Items,{
    as:"items",
    foreignKey: "idMenu",
    sourceKey: "id"
})

controller.get = async function(req, res){
    let data = await Menu.findAll({
        include:[
            {
                model: Items,
                as: "items"
            }
        ]
    });

    res.send(data);
}

controller.one = async function(req, res){
    let id = req.params.id;
    let data = await Menu.findOne({
        where:{
            id: id
        },
        include:[
            {
                model: Items,
                as: "items"
            }
        ]
    });
    res.send(data);
}

controller.usuario = async function(req, res){
    let id = req.params.id;
    let data = await Menu.findAll({
        where:{
            idUsuario: id
        }
    });
    console.log(id, data);
    res.send(data);
}

//seccion individual

//menu

controller.post = async function(req, res){
    const t = await sequelize.transaction();
    try{
        console.log(req.body);

        let menu = {
            nombre : req.body.nombre,
            template: req.body.template,
            idUsuario: req.body.idUsuario,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        let menuCreado = await Menu.create(menu, {
            transaction: t
        });

        await t.commit();
        res.send(menuCreado);

    }catch(err){
        // We rollback the transaction.
        console.log(err);
        await t.rollback();
        res.status(400).send({err});
    }
}

controller.put = async function(req, res){
    const t = await sequelize.transaction();
    try{
        let menu = await await Menu.findOne({
            where:{
                id: req.params.id
            },
            include:[
                {
                    model: Items,
                    as: "items"
                }
            ]
        },{
            transaction: t
        });

        let menuUpdate = {
            nombre : req.body.nombre,
            template: req.body.template,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        let menuActualizado = await Menu.update(menuUpdate,{
            where:{
                id: req.params.id
            }
        },{
            transaction: t
        });

        await t.commit();
        res.send(menuActualizado);

    }catch(err){
          // We rollback the transaction.
          console.log(err);
        await t.rollback();
        res.status(400).send({err});
    }
}

//items

controller.addItem = async function(req, res){
    const t = await sequelize.transaction();
    try{
        console.log(req.body.items);
        req.body.items.map( x => delete x.id);
        var insertados = await Items.bulkCreate(req.body.items, {
            transaction: t
        });   
        t.commit();
        res.send(insertados);
    }catch(err){
        console.log(err);
        await t.rollback();
        res.status(400).send({err});
    }
}

controller.removeItem = async function(req, res) {
    const t = await sequelize.transaction();

    try{
        var items = req.body.items;
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            await Items.destroy({
                where:{
                    id: element.id
                }
            },{
                transaction: t
            })
        }
        t.commit();
        res.send();
    }catch(err){
        console.log(err);
        await t.rollback();
        res.status(400).send({err});
    }
}

controller.remove = async(req, res)=>{
    const t = await sequelize.transaction();

    try{
        //eliminamos el menu
        await Menu.destroy({
            where:{
                id: parseInt(req.params.id)
            }
        },{
            transaction: t
        });

        await Items.destroy({
            where:{
                idMenu: parseInt(req.params.id)
            }
        },{
            transaction: t
        });
        res.send();
    }catch(err){
        console.log(err);
        await t.rollback();
        res.status(400).send({err});
    }
}

module.exports = controller;