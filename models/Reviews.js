/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig.js");

const Reviews = {
  findReviewsByID: (productid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM reviews WHERE productid = ?;";
        dbConn.query(sql, [productid], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);

          };
          console.log(results[0]);
          return callback(null, results[0]);
        });
      }
    });
  },
  insert: (review, productid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO reviews (productid, userid, rating, review) VALUES (?, ?, ?, ?)";
        dbConn.query(sql, [productid, review.userid, review.rating, review.review], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  }
  // delete(productid, callback) {
  //   var dbConn = db.getConnection();
  //   dbConn.connect((err) => {
  //     if (err) {
  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       var sql = "DELETE FROM reviews WHERE productid = ?;";
  //       dbConn.query(sql, [productid], (error, results) => {
  //         dbConn.end();
  //         if (error) {
  //           return callback(error, null);
  //         };
  //         return callback(null, results);
  //       });
  //     }
  //   });
  // }
};

module.exports = Reviews;