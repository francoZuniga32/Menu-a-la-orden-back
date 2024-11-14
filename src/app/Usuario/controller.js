const controller = {};
const db = require("../../db/source/db");


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

 controller.login = async (req, res) => {
    const { username, password } = req.body; // esto separa las variables del req y las almacena en cada const username y password nashe
    const user = await db.find("usuarios", x => x.username === username && x.password === password); // esto esta feo e inseguro pero weno
    
    if (user) {
        res.status(200).json({ message: "Login exitoso" });
    } else {
        res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }
}; 

controller.register = async (req, res) => {
    const { username, password } = req.body; // Extrae los datos del nuevo usuario

    // Comprueba si el usuario ya existe
    const existeUsuario = await db.find("usuarios", x => x.username === username);

    if (existeUsuario) {
        // Si el usuario ya existe, devuelve un error
        res.status(409).json({ message: "El usuario ya está registrado" });
    } else {
        // Si el usuario no existe, crea el nuevo usuario
        const nuevoUsuario = { id: Date.now(), username, password }; // Genera un id único para el usuario
        await db.add("usuarios", nuevoUsuario); // CHECK ESTO ,esta parte la hizo gpt xd

        res.status(201).json({ message: "Registro exitoso", user: nuevoUsuario });
    }
};

module.exports = controller;