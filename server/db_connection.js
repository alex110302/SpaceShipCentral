const mysql = require('mysql2')
const { connection } = require('./secrets/db_con.json')



module.exports = mysql.createConnection(connection)