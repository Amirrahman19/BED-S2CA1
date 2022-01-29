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
        var sql = `select u.username as username,p.name as productname, rating, review
        from users as u,reviews as r, product as p
        where u.userid = r.userid AND r.productid = p.productid and p.productid = ?;`;
        dbConn.query(sql, [productid], (error, results) => {
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
  insertreviews: (productid, review, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO reviews (productid, rating, review, userid) VALUES (?, ?, ?,?)";
        dbConn.query(sql, [productid, review.rating, review.review, review.userid]), (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        };
      }
    });
  }

};

module.exports = Reviews;