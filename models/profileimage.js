/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const db = require("./databaseConfig");

const ProfileImage = {
  findProfileImageByUserID: (userid, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "SELECT profile_pic_url FROM users WHERE userid = ?;";
        dbConn.query(sql, [userid], (error, results) => {
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
  insertProfileImage: (userid, profile_image, callback) => {
    var dbConn = db.getConnection();
    dbConn.connect((err) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      } else {
        var sql = "UPDATE users SET profile_pic_url=? WHERE userid=?";
        dbConn.query(sql, [profile_image, userid], (error, results) => {
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

module.exports = ProfileImage;