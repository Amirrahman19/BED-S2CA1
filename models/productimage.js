/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");

const ProductImage = {
  findProductImageByProductID: (productid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT product_image FROM product_image WHERE productid = ?;";
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
  updateImage: (productid, product_image, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "UPDATE product_image SET product_image = ? WHERE productid = ?;";
        dbConn.query(sql, [product_image, productid], (error, results) => {
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

module.exports = ProductImage;