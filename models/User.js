/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");
// var config = require('../config');
// var jwt = require('jsonwebtoken');

const User = {
  // //login
  // loginUser: function (email, password, callback) {

  //   var conn = db.getConnection();
  //   conn.connect(function (err) {
  //     if (err) {
  //       console.log(err);
  //       return callback(err, null);
  //     }
  //     else {
  //       console.log("Connected!");

  //       var sql = 'select * from users where email=? and password=?';

  //       conn.query(sql, [email, password], function (err, result) {
  //         conn.end();

  //         if (err) {
  //           console.log(err);
  //           return callback(err, null);

  //         } else {

  //           // var msg='{\'result\':\''+result.length+'\'}';               
  //           // return callback(null, msg);
  //           //console.log(config.key);
  //           //CREATING THE TOKEN
  //           var token = "";
  //           if (result.length == 1) {
  //             token = jwt.sign(
  //               { id: result[0].userid, role: result[0].role }, config.key, 
  //               {expiresIn: 86400}) //expires in 24 hrs
  //               //end of sign function

  //           }

  //           return callback(null, token);


  //         }
  //       });

  //     }
  //   });
  // },
  findUsersByID: (userID, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM users WHERE userid = ?;";
        dbConn.query(sql, [userID], (error, results) => {
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
  findAllUsers: (callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT * FROM users;";
        dbConn.query(sql, (error, results) => {//square for array of all the userids
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
  insert: (user, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO users (username, email, contact, password, type, profile_pic_url) VALUES (?, ?, ?, ?, ?, ?)";
        dbConn.query(sql, [user.username, user.email, user.contact, user.password, user.type, user.profile_pic_url], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  },
  insertuser: (user, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO users (username, email, password, type, contact, profile_pic_url) VALUES (?, ?, ?, ?,)";
        dbConn.query(sql, [user.username, user.email, user.contact, user.password, user.type, user.profile_pic_url], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);
          };
          return callback(null, results.insertId);
        });
      }
    });
  },
  update: (userID, user, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "UPDATE users SET username = ?, email = ?, contact = ?, type = ? , profile_pic_url = ? WHERE userid = ?;";
        dbConn.query(sql, [user.username, user.email, user.contact, user.type, user.profile_pic_url, userID], (error, results) => {
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

module.exports = User;