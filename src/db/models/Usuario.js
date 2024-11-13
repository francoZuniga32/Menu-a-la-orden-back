const db = require("../source/db");

class Usuario extends IModel { 
    async get(callback){
        return await db.find("Usuarios",callback);
    }

    async add(object){
        return await db.add("Usuarios", object);
    }

    async remove(id){
        return await db.remove("Usuarios", id);
    }

    async update(id, object){
        return await db.update("Usuarios", id, object);
    }
}