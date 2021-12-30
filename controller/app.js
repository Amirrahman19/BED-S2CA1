/*
Admission Number: P2100803
Name: Haja Amir Rahman
Class : DAAA/FT/1B/01
*/

const express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/User');
var Category = require('../models/Category');
var Product = require('../models/Product');
var Reviews = require('../models/Reviews');
var Interest = require('../models/Interest');
var Promotion_product = require('../models/Promotion_product');
const multer = require('multer');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))


//Endpoint 2
app.get("/users/", (req, res, next) => {
  User.findAllUsers((error, users) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
    };
    res.status(200).send(users);
  });
});
//Endpoint 3
app.get("/users/:id/", (req, res) => {
  const userID = parseInt(req.params.id);
  // if userID is not a number, send a 400.
  if (isNaN(userID)) {
    res.status(400).send();
    return;
  }

  User.findUsersByID(userID, (error, user) => {
    if (error) {
      res.status(500).send("What is the error?");
      return;
    };

    // send a 404 if user is not found.
    if (user === null) {
      res.status(404).send("error");
      return;
    };
    res.status(200).send(user);
  });
});
//Endpoint 1
app.post("/users/", (req, res, next) => {
  User.insert(req.body, (error, userID) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    }
    else {res.status(422).send("Unprocessable Entity")};
    res.status(201).send({ userID });
  });
});

//Endpoint 4
app.put("/users/:id/", (req, res, next) => {
  const userID = parseInt(req.params.id);
  if (isNaN(userID)) {
    res.status(400).send();
    return;
  }

  User.update(userID, req.body, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    }
    else {res.status(422).send("Unprocessable Entity")};
    res.status(204).send();
  });
});

//Endpoint 6
app.get("/category/", (req, res, next) => {
  Category.findAllCategories((error, users) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
    };
    res.status(200).send(users);
  });
});

//Endpoint 5
app.post("/category", (req, res, next) => {
  Category.insert(req.body, (error, category) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    }
    else {res.status(422).send("Unprocessable Entity")};
    res.status(201).send({ category });
  });
});

//Endpoint 8
app.get("/product/:id/", (req, res) => {
  const productid = parseInt(req.params.id);
  // if userID is not a number, send a 400.
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }

  Product.findProductByID(productid, (error, products) => {
    if (error) {
      res.status(500).send("What is the error?");
      return;
    };

    // send a 404 if user is not found.
    if (products === null) {
      res.status(404).send("error");
      return;
    };
    res.status(200).send(products);
  });
});

//Endpoint 7
app.post("/product/", (req, res, next) => {
  Product.insert(req.body, (error, productid) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    };
    res.status(201).send({ productid });
  });
});

//Endpoint 9
app.delete('/product/:id/', (req, res) => {
  var productid = parseInt(req.params.id);
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }
  Product.delete(productid, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    };
    res.status(204).send();
  })
})


//Endpoint 10
app.post("/product/:id/review/", (req, res, next) => {
  const productid = parseInt(req.params.id);
  const review = req.body;
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }
  else {
    console.log(typeof (id));
  }
  Reviews.insert(review, productid, (error, reviewid) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    } else {
      if (reviewid === null) {
        res.status(404).send();
        return;
      }
    };
    res.status(201).send({ reviewid });
  });
});

//Endpoint 11
app.get("/product/:id/reviews", (req, res) => {
  const productid = parseInt(req.params.id);
  // if userID is not a number, send a 400.
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }

  Reviews.findReviewsByID(productid, (error, products) => {
    if (error) {
      res.status(500).send("What is the error?");
      return;
    };

    // send a 404 if user is not found.
    if (products === null) {
      res.status(404).send("error");
      return;
    };
    res.status(200).send(products);
  });
});

// app.delete('/product/:id/reviews', (req, res) => {
//   var productid = parseInt(req.params.id);
//   if (isNaN(productid)) {
//     res.status(400).send();
//     return;
//   }
//   Reviews.delete(productid, (error) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send();
//       return;
//     };
//     res.status(204).send();
//   })
// })

//Endpoint 12
app.post("/interest/:userid", (req, res, next) => {
  const userid = parseInt(req.params.userid);
  const categoryids = req.body.categoryids;
  catArr = categoryids.split(",");

  Interest.insert(catArr, userid, (error, interest) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    };
    res.status(201).send({ interest });
  });
});

//Advanced feature endpoints
//Endpoint 13
app.post("/promotion/:productid", (req, res, next) => {
  const productid = parseInt(req.params.productid);
  const promotion = req.body;
  Promotion_product.insert(productid, promotion, (error, promotion) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    };
    res.status(201).send({ promotion });
  });
});


//Endpoint 14
app.get("/promotion/:productid", (req, res) => {
  const productid = parseInt(req.params.productid);
  // if userID is not a number, send a 400.
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }
  Promotion_product.findPromotionByID(productid, (error, products) => {
    if (error) {
      res.status(500).send("What is the error?");
      return;
    };
    // send a 404 if user is not found.
    if (products === null) {
      res.status(404).send("error");
      return;
    };
    res.status(200).send(products);
  });
});

//Endpoint 15
app.delete('/promotion/:productid/', (req, res) => {
  var productid = parseInt(req.params.productid);
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }
  Promotion_product.delete(productid, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send("What is the error?");
      return;
    };
    res.status(204).send();
  })
})

// var Storage = multer.diskStorage({
//    destination: function(req, file, callback) {
//       callback(null, 'images')
//    },
//    filename: function(req, file, callback) {
//       callback(null, file.originalname);
//    }
// });
// var upload = multer({
//    storage: Storage
//    fileFilter: (req, file, callback) => {
// 		if (file.mimetype !== 'image/jpeg') { //Only allow jpg files to be uplaoded
// 			return callback(new Error('File uploaded is not .jpg image file'));
// 		}
// 		callback(null, true);
// 	},
// 	limits: {
// 		fileSize: 1000000, //Maximum 1MB(1000000 Byte) files to be uploaded
// 		files: 1 //Maximum one files to be uploaded
// 	}
// }).array('image', 3);
// //route
// app.post('/', (req, res) => {});

// app.post('/upload', (req, res) => {
//    console.log(req.file);
//    upload(req, res, err => {
//       if (err) {
//          console.log(err);
//          return res.status(404).send('somthing went wrong');
//       }
//       return res.status(201).send('file uploaded successfully');
//    });
// });

module.exports = app;
