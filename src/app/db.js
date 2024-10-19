const JSONdb = require('simple-json-db');
const path = require("path");

const db = new JSONdb(path.join(__dirname, "../../../data/db.json"));

const dbocontroller = {};

dbocontroller.find = async (table, where)=>{
    //ahora buscamos en el json
    let datos = await db.get(table)
    console.log(datos, where);
    if(datos != null){
        let retorno = datos.filter(where);
        console.log(retorno);
        return retorno;
    }else{
        return false;
    }
}

dbocontroller.add = async (table,object)=>{
    //ahora buscamos en el json
    let datos = await db.get(table)
    console.log(datos);
    if(datos != null){
        object.id = datos.length + 1;
        console.log(object, datos);
        datos.push(object);
        await db.set(table, datos);
        await db.sync();
        return true;
    }else{
        return false;
    }
}

dbocontroller.remove =  async (table, id)=>{
    //ahora buscamos en el json
    let datos = await db.get(table)
    if(datos != null){
        let dato = datos.find(x => x.id == id);
        let ideliminar = datos.indexOf(dato);
        if(dato){
            datos.slice(ideliminar, 1);
            console.log(datos);
            await db.set(table, datos);
            await db.sync();
            
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

dbocontroller.update = async (table, id, object)=>{
    //ahora buscamos en el json
    let datos = await db.get(table)
    if(datos != null){
        let dato = datos.find(x => x.id == id);
        if(dato){
            object.id = dato.id;
            datos.remove(dato);
            datos.add(object);
            await db.set(table, datos)
            await db.sync();
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

module.exports = dbocontroller;