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
var app = express();


app.use(bodyParser.json());

//Endpoint 2
app.get("/users/", (req, res, next) => {
  User.findAll((error, users) => {
    if (error) {
      console.log(error);
      res.status(500).send();
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

  User.findByID(userID, (error, user) => {
    if (error) {
      res.status(500).send("error sia");
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
      res.status(500).send();
      return;
    };
    res.status(201).send({userID});
  });
});

//Endpoint 4
app.put("/users/:id/", (req, res, next) => {
  const userID = parseInt(req.params.id);
  if (isNaN(userID)) {
    res.status(400).send();
    return;
  }

  User.edit(userID, req.body, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    };
    res.status(204).send();
  });
});

//Endpoint 6
app.get("/category/", (req, res, next) => {
  Category.findAll((error, users) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    };
    res.status(200).send(users);
  });
});

//Endpoint 5
app.post("/category", (req, res, next) => {
  Category.insert(req.body, (error, category) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    };
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

  Product.findByID(productid, (error, products) => {
    if (error) {
      res.status(500).send("error sia");
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
      res.status(500).send();
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
      res.status(500).send();
      return;
    };
    res.status(204).send();
  })
})

//Endpoint 1
// app.put("/product/:id/", (req, res, next) => {
//   const productid = parseInt(req.params.id);
//   if (isNaN(productid)) {
//     res.status(400).send();
//     return;
//   }

//   Product.edit(productid, req.body, (error) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send();
//       return;
//     };
//     res.status(204).send();
//   });
// });


//Endpoint 10
app.post("/product/:id/review/", (req, res, next) => {
  const productid = parseInt(req.params.id);
  if (isNaN(productid)) {
    res.status(400).send();
    return;
  }
  else {console.log(typeof(id));
  }
  Reviews.insert(req.body, productid, (error, reviewid) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    } else {
      if (reviewid === null) {
        res.status(404).send();
        return;
      }
    };
    res.status(201).send({reviewid});
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

  Reviews.findByID(productid, (error, products) => {
    if (error) {
      res.status(500).send("error sia");
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

//Endpoint 12
// app.post("/interest/:userid", (req, res, next) => {
//   const userid = parseInt(req.params.id);
//   Interest.insert(req.body, (error, interest) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send();
//       return;
//     };
//     res.status(201).send({interest});
//   });
// });

module.exports = app;
