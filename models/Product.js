/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");


const Product = {
  findAllProduct: (callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT productid, name FROM product ";
        dbConn.query(sql, (error, results) => {
          dbConn.end();
          if (error) {
            console.log(error);
            return callback(error, null);
          };
          console.log(results);
          return callback(null, results);
        });
      }
    });
  },
  findProductByID: (productid, callback) => {
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
  findAllProducts: (callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM product LEFT JOIN product_image ON product.productid = product_image.productid UNION SELECT * FROM product RIGHT JOIN product_image ON product.productid = product_image.productid";
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
  insertnewproduct: (product, callback) => {

    console.log(product)
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO product (name, description, categoryid, brand, price) VALUES (?, ?, ?, ?, ?)";
        dbConn.query(sql, [product.name, product.description, product.category, product.brand, product.price], (error, results) => {//square for array of all the userids
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  },
  delete(productid, callback) {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "DELETE FROM product WHERE productid = ?;";
        dbConn.query(sql, [productid], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results);
        });
      }
    });
  },

  updateproduct: (productid, product, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "UPDATE product SET name = ?, description = ?, categoryid = ?, brand = ? , price = ? WHERE productid = ?;";
        dbConn.query(sql, [product.name, product.description, product.categoryid, product.brand, product.price, productid], (error, results) => {
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