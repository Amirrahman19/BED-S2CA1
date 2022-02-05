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
        /* [
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
  },
  findInterestsByID: (interestid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM interests WHERE interestid = ?;";
        dbConn.query(sql, [interestid], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          console.log(results);
          return callback(null, results);
        });
      }
    });
  },
  delete(catid, callback) {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "DELETE FROM interests WHERE categoryid = ?;";
        dbConn.query(sql, [catid], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results);
        });
      }
    });
  },
  getInterest: (userid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM interests;";
        dbConn.query(sql, [userid], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results);
        });
      }
    });
  }
}

module.exports = Interest;