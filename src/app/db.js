const JSONdb = require('simple-json-db');
const path = require("path");

const db = new JSONdb(path.join(__dirname, "../../../data/db.json"));

const dbocontroller = {};

dbocontroller.find = async (table, where)=>{
    //ahora buscamos en el json
    let datos = await db.get(table).datos;
    if(datos != null){
        return datos.filter(where);
    }else{
        return false;
    }
}

dbocontroller.add = async (table,object)=>{
    //ahora buscamos en el json
    let esquema = await db.get(table)
    console.log(esquema);
    if(esquema != null){
        object.id = esquema.indice + 1;
        esquema.indice++
        console.log(object, esquema.datos);
        esquema.datos.push(object);
        await db.set(table, esquema);
        await db.sync();
        return true;
    }else{
        return false;
    }
}

dbocontroller.remove =  async (table, id)=>{
    //ahora buscamos en el json
    let esquema = await db.get(table)
    if(esquema != null){
        let dato = esquema.datos.find(x => x.id == id);
        let ideliminar = esquema.datos.indexOf(dato);
        if(dato){
            esquema.datos.splice(ideliminar, 1);
            console.log(ideliminar, esquema.datos);
            await db.set(table, esquema);
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
    let esquema = await db.get(table)
    if(esquema != null){
        let dato = esquema.datos.find(x => x.id == id);
        
        if(dato){
            object.id = dato.id;
            esquema.datos[esquema.datos.indexOf(dato)] = object;
            await db.set(table, esquema)
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