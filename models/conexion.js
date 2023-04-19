const mysql = require('mysql2');
var sqlConnection = mysql.createConnection({
    host: "localhost",
    user: 'alex9880',
    database: 'sistema',
    password:'12345678'
});
sqlConnection.connect(function(err){
    if(err){
        console.log(err.message)
    }else{
    console.log("Conexion exitosa");
    }
});
module.exports=sqlConnection;
