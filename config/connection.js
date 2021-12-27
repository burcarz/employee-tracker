const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Salsa220004147!',
        database: 'employees'
    },
    console.log('Connected to the election database.')
);

module.exports = db;