const mysql = require('mysql2')

const DBconfig = require('../../config/db.js');

console.log(DBconfig)

const connection = mysql.createPool(DBconfig).promise()

module.exports = { conn: connection };