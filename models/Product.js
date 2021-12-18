/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");


const Product = {

  findByID: (productid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM product WHERE productid = ?;";
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
  // findAll: (callback) => {
  //   var dbConn = db.getConnection();
  //   dbConn.connect((err) => {
  //     if (err) {
  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       var sql = "SELECT * FROM users;";
  //       dbConn.query(sql, (error, results) => {//square for array of all the userids
  //         dbConn.end();
  //         if (error) {
  //           return callback(error, null);
  //         };
  //         console.log(results);
  //         return callback(null, results);
  //       });

  //     }
  //   });
  // },
  insert: (product, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO product (name, description, categoryid, brand, price) VALUES (?, ?, ?, ?, ?)";
        dbConn.query(sql, [product.name, product.description, product.categoryid, product.brand, product.price], (error, results) => {//square for array of all the userids
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  },
  // edit: (productid, product, callback) => {
  //   var dbConn = db.getConnection();
  //   dbConn.connect((err) => {
  //     if (err) {
  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       var sql = "UPDATE product SET productid = ?, name = ?, description = ?, categoryid = ? , brand = ?, price = ? WHERE productid = ?;";
  //       dbConn.query(sql, [product.productid, product.name, product.description, product.categoryid, product.brand, product.price, productid], (error, results) => {
  //         dbConn.end();
  //         if (error) {
  //           return callback(error, null);
  //         };
  //         return callback(null, results);
  //       });
  //     }
  //   });
  // },
  delete(productid, callback) {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "DELETE FROM product WHERE productid = ?;";
        dbConn.query(sql, [productid], (error, results) => {//square for array of all the userids
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results);
        });
      }
    });
  }
};

module.exports = Product;