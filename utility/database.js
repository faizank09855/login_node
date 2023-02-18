const mysql = require('mysql2'); 

const pool = mysql.createPool({
    host : 'localhost' ,
    user: 'root',
    database: 'facebook',
    password: '1234',
});


module.exports = pool.promise(); 