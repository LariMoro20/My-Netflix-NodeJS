// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',  //onde está o meu banco
    user: 'root',       //usuario
    password: '',   //senha
    database: 'netflix_db'    //qual o esquema
}).promise();




module.exports = connection;