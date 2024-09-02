const  mysql = require('mysql2');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"CTPI2024*",
    database:"colegio_db"

});

db.connect((e)=> {
    if (e){
        console.log("error en la conexion");

}
else {
    console.log("conectado a mysql");
    
}
});

module.exports = db;