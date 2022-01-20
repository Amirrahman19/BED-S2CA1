/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");

const User = {
  verify: function (email, password, role, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {
      if (err) {//database connection gt issue!
        console.log(err);
        return callback(err, null);
      } else {
        const query = "SELECT * FROM users WHERE email=? and password=? and role=?";
        dbConn.query(query, [email, password, role], (error, results) => {
          if (error) {
            console.log(error)
            callback(error, null);
            return;
          }
          if (results.length === 0) {
            return callback(null, null);

          } else {
            console.log(results)
            const user = results[0];
            return callback(null, user);
          }
        });
      }
    });
  },
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
  insertadmin: (user, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "INSERT INTO users (username, email, contact, password, role, profile_pic_url) VALUES (?, ?, ?, ?, ?, ?)";
        dbConn.query(sql, [user.username, user.email, user.contact, user.password, "Admin", ""], (error, results) => {
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
        var sql = "INSERT INTO users (username, email, password, role, contact, profile_pic_url) VALUES (?, ?, ?, ?,?,?)";
        dbConn.query(sql, [user.username, user.email, user.password, "Customer", user.contact, ""], (error, results) => {
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