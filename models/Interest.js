/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");

const Interest = {
  insert: (interests, userid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {

        values = [];
        interests.forEach(element => { values.push([userid, parseInt(element)]); });

        console.log(values)
        /** [
         * [1 , 1],
         * [1 , 2],
         * [1 , 4],
         * ]
         */

        var sql = "INSERT INTO interests (userid, categoryid) VALUES ?"; //bulk insert
        dbConn.query(sql, [values], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  }
}

module.exports = Interest;