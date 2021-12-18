/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01

*/
const mysql = require("mysql");

var dbconnect = {
  getConnection: () => {

    var conn = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password', //your own password
      database: 'sp_it',
      dateStrings: true//impt
    });

    return conn;
  }
};

// put this at the end of the file
module.exports = dbconnect;

