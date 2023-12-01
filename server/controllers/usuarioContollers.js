const connection = require("../database");

//obtener usuarios
const obtenerAdmin = (req,res) => {
    connection.query('SELECT*FROM usuarios', (error,results) => {
        if(error){
            console.error("Error al obtener los usuarios", error);
            res.status(500).json({
                error: "Error al obtener usuarios",
            });
        } else{
            res.json({listaAdmin: results});
        }
    })
}

//obtener usuarios por id
const obtenerAdminId = (req, res) =>{
    const id = req.params.id_usuario;

    connection.query('SELECT * FROM usuarios WHERE id_admin = ?', [id], (error, results) =>{
        if(error){
            console.error("Error al obtener al usuario", error);
            res.status(500),json({error: "Ocurrio un error al obtener al usuario"});
        }else if (results === 0){
            res.status(500).json({error: "El usuario no fue encontrado"});
        }else{
            res.json(results[0]);
        }
    });
}

//agregar usuarios
const crearAdmin = (req, res) =>{
    const {usuario, contraseña} = req.body;
    connection.query('INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)', [usuario, contraseña], (error, results) =>{
        if(error){
            console.error("Error al agregar usuario", error);
            res.status(500).json({error: "Error al agregar usuario"});
        }else{
            res.json({message: "Usuario agregado"});
        }
    });
}

const eliminarAdmin = (req, res) => {
    const id = req.params.id_usuario;
    connection.query('DELETE FROM usuarios WHERE id_usuario = ?', [id], (error, results) => {
        if(error){
            console.error("Error al eliminar usuario", error);
            res.status(500).json({error:"Ocurrio un error al eliminar usuario"});
        }else{
            res.json({message:"El usuario fue eliminado correctamente"});
        }
    })
}

const actualizarAdmin = (req, res) => {
    const id = req.params.id_usuario;
    const {usuario, contraseña} = req.body;
    connection.query('UPDATE FROM usuarios SET usuario = ?, contraseña = ? WHERE id_usuario = ?', [usuario, contraseña, id], (error, results) => {
        if(error){
            console.error("Error al actualizar usuario", error);
            res.status(500).json({error:"Ocurrio un error al actualizar el usuario"});
        }else{
            res.json({message:"El usuario se actualizo correctamente"});
        }
    })
}

module.exports = {
    obtenerAdmin,
    obtenerAdminId,
    crearAdmin,
    eliminarAdmin,
    actualizarAdmin
}