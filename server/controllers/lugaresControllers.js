const conecction = require("../database")

const obtenerLugares = (req, res) => {
    conecction.query('SELECT*FROM lugares', (error, results) =>{
        if(error){
            console.error("Error al obtener los lugares", error);
            res.status(500).json({
                error: "Error al obtener lugares",
            });
        } else{
            res.json(results);
        }
    })
}

const obtenerLugaresId = (req, res) => {
    const id = req.params.id_lugares;

    conecction.query('SELEC*FROM lugares WHERE id_lugares = ?', [id], (error, results) => {
        if(error){
            console.error("Error al obtener el lugar", error);
            res.status(500).json({error:"Ocurrio un error al obtener lugar"});
        }else if (results.length === 0){
            res.status(500).json({error: "El lugar no fue encontrada"})
        }else{
            res.json(results[0]);
        }
    })
}

const crearLugar = (req, res) => {
    const {lugares, imagen} = req.body;
    conecction.query('INSERT INTO lugare (lugares, imagen) VALUES (?, ?)', [lugares, imagen], (error, results) => {
        if(error){
            console.error("Error al agregar lugar", error);
            res.status(500).json({error:"Error al agregar lugar"});
        }else{
            res.json({message: "Lugar agregada"});
        }
    })
}

const eliminarLugar = (req, res) => {
    const id = req.params.id_lugares;

    conecction.query('DELETE FROM lugares WHERE id_lugares= ?', [id], (error, results) => {
        if(error){
            console.error("Error al actualizar el lugar", error);
            res.status(500).json({error:"Ocurrio un error al eliminar lugar"});
        }else{
            res.json({message:"El lugar fue eliminada correctamente"});
        }
    })
}

const actualizarLugar = (req, res) => {
    const id = req.params.id_lugares;
    const {lugares, imagen} = req.body

    conecction.query('UPDATE lugares SET lugares = ?, imagen = ? WHERE id_lugares = ?', [lugares, imagen, id], (error, results) => {
        if(error){
            console.error("Error al actualizar lugar", error);
            res.status(500).json({error:"Ocurrio un error al actualizar el lugar"});
        }else{
            res.json({message:"El lugar se actualizo correctamente"});
        }
    })
}

module.exports = {
    obtenerLugares,
    obtenerLugaresId,
    crearLugar,
    eliminarLugar,
    actualizarLugar
}