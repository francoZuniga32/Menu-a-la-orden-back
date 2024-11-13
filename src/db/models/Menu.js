const db = require("../source/db");
const IModel = require('./IModel');

class Menus extends IModel { 
    async get(callback){
        return await db.find("menus",callback);
    }

    async add(object){
        return await db.add("menus", object);
    }

    async remove(id){
        return await db.remove("menus", id);
    }

    async update(id, object){
        return await db.update("menus", id, object);
    }
}

module.exports = new Menus();