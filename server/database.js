const mysql = require('mysql');

const conecction = mysql.createConnection({
    host: "mysql-proyectos.alwaysdata.net",
    user: "proyectos",
    password: "horadepasear",
    database: "proyectos_horapasear",
});

conecction.connect((error) => {
    if(error){
        console.log("Error al conectarse a la base de datos", error);
    }else{
        console.log("Conexión exitosa a la base de datos");
    }
});

module.exports = conecction;