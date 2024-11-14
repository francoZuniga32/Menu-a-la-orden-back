const db = require("../source/db");
const IModel = require('./IModel');

class Usuario extends IModel { 
    async get(callback){
        return await db.find("usuarios",callback);
    }

    async add(object){
        return await db.add("usuarios", object);
    }

    async remove(id){
        return await db.remove("usuarios", id);
    }

    async update(id, object){
        return await db.update("usuarios", id, object);
    }
}

module.exports = new Usuario;