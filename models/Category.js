
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

  insertnewcategory: function (category, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        const insertQuery =`INSERT INTO category (category, description) VALUES (?, ?);`;
        dbConn.query(insertQuery, [category.category, category.description], (error, results) => {
          dbConn.end()
          if (error) {
            return callback(error, null);
          }
          return callback(null, results.insertId);
        });
      }
    });
  },

}

module.exports = Category;
