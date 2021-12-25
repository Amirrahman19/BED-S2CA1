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

  insert: function (category, callback) {
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

  // edit: function (postID, post, callback) {
  //   var dbConn = db.getConnection();
  //   dbConn.connect(function (err) {

  //     if (err) {//database connection gt issue!

  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       const editPostQuery =
  //         `
  //   UPDATE post
  //   SET
  //   text_body = ?
  //   WHERE id = ?;
  //   `;
  //       dbConn.query(editPostQuery, [post.text_body, postID], (error, results) => {
  //         if (error) {
  //           return callback(error,null);
  //         };
  //         return callback(null,results);
  //       });
  //     }
  //   });
  // },

  // delete: function (postID, callback) {
  //   var dbConn = db.getConnection();
  //   dbConn.connect(function (err) {

  //     if (err) {//database connection gt issue!

  //       console.log(err);
  //       return callback(err, null);
  //     } else {

  //       const deletePostQuery =
  //         `
  //   DELETE FROM post
  //   WHERE id = ?
  //   `;
  //       dbConn.query(deletePostQuery, postID, (error, results) => {
  //         dbConn.end();
  //         if (error) {
  //           return callback(error,null);
  //         };
  //         return callback(null,results);
  //       });
  //     }
  //   });
  // },

  // like: function (postID, likerID, callback) {

  //   var dbConn = db.getConnection();
  //   dbConn.connect(function (err) {

  //     if (err) {//database connection gt issue!

  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       const likeQuery =
  //         `
  //   INSERT INTO likes
  //   (fk_user_id, fk_post_id)
  //   VALUES
  //   (?, ?);
  //   `;
  //       dbConn.query(likeQuery, [likerID, postID], (error, results) => {
  //         dbConn.end();
  //         if (error) {
  //           return callback(error);
  //         }
  //         return callback(null);
  //       });
  //     }
  //   });
  // },

  // unlike: function (postID, likerID, callback) {

  //   var dbConn = db.getConnection();
  //   dbConn.connect(function (err) {

  //     if (err) {//database connection gt issue!

  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       const likeQuery =
  //         `
  //   DELETE FROM likes
  //   WHERE
  //   fk_user_id = ?
  //   AND
  //   fk_post_id = ?;
  //   `;
  //       dbConn.query(likeQuery, [likerID, postID], (error, results) => {
  //         if (error) {
  //           return callback(error);
  //         }
  //         return callback(null);
  //       });
  //     }
  //   });
  // },

  // findLikers: (postID, callback) =>   {
  //   var dbConn = db.getConnection();
  //   dbConn.connect(function (err) {

  //     if (err) {//database connection gt issue!

  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       const findLikersQuery =
  //         `
  //   SELECT user * FROM user, likes
  //   where likes.fk_user_id = user.id
  //   and likes.fk_post_id = ?
  //   `;
  //       dbConn.query(findLikersQuery, postID, (error, results) => {
  //         dbConn.end();
  //         if (error) {
  //           callback(error, null);
  //           return;
  //         }
  //         return callback(null, results);
  //       });
  //     }
  //   });
  // },

  // // returns a object that maps post id to an array of likers of that post
  // findLikersByPostIDs: (postIDs, callback) => {

  //   // we have to manually handle this edge case because
  //   // mysql doesn't allow empty lists.
  //   if (postIDs.length === 0) {
  //     process.nextTick(() => {
  //       return callback(null, {});
  //     });
  //   }

  //   var dbConn = db.getConnection();
  //   dbConn.connect(function (err) {

  //     if (err) {//database connection gt issue!

  //       console.log(err);
  //       return callback(err, null);
  //     } else {
  //       const findLikersQuery =
  //         `
  //   SELECT user.*, likes.fk_post_id FROM user, likes
  //   Where likes.fk_user_id = user.id
  //   and likes.fk_post_id IN (?);
  //   `;

  //       dbConn.query(findLikersQuery, [postIDs], (error, likers) => {
  //         dbConn.end();
  //         if (error) {
  //           return callback(error, null);
  //         }

  //         const likersByPostID = {};

  //         // initialize all post ids keys with an empty array
  //         for (let i = 0; i < postIDs.length; i++) {
  //           const postID = postIDs[i];
  //           likersByPostID[postID] = [];
  //         }

  //         for (let i = 0; i < likers.length; i++) {
  //           const liker = likers[i];
  //           likersByPostID[liker.fk_post_id].push(liker);
  //         }

  //         return callback(null, likersByPostID);
  //       });
  //     }

  //   });
  // }
}

module.exports = Category;
