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
  findAllReviews: (callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = `select u.username as username,p.name as productname, rating, review
                  from users as u,reviews as r, product as p
                  where u.userid = r.userid AND r.productid = p.productid`;
        dbConn.query(sql, (error, results) => {
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
  insertreviews: (review, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO reviews (productid, userid, rating, review) VALUES (?, ?, ?, ?)";
        dbConn.query(sql, [review.productid, review.userid, review.rating, review.review], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  }
  
};

module.exports = Reviews;