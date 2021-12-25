
const db = require("./databaseConfig");


const User = {

  findBUsersyID: (userID, callback) => {
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
        var sql = "INSERT INTO users (username, email, contact, type, profile_pic_url) VALUES (?, ?, ?, ?, ?)";
        dbConn.query(sql, [user.username, user.email, user.contact, user.type, user.profile_pic_url], (error, results) => {//square for array of all the userids
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