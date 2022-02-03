
/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig.js");

const Category = {

  findAllCategories: function (callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        const findAllQuery = `SELECT * FROM category;`;
        dbConn.query(findAllQuery, (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          }
          return callback(null, results);
        });
      }
    });
  },
  findCategoriesByID: (productid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM product WHERE categoryid = ?;";
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
  insertnewcategory: function (category, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        const sql =`INSERT INTO category (category, description, categorypics) VALUES (?, ?, ?);`;
        dbConn.query(sql, [category.category, category.description, ""], (error, results) => {
          dbConn.end()
          if (error) {
            return callback(error, null);
          }
          return callback(null, results.insertId);
        });
      }
    });
  },
  updatecategory: (categoryid, category, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "UPDATE category SET category = ?, description = ? WHERE categoryid = ?;";
        dbConn.query(sql, [category.category, category.description, categoryid], (error, results) => {
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

module.exports = Category;
