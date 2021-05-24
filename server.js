const express = require("express");
const mongoose = require("mongoose");
var passport = require("passport");
const routes = require("./routes");
const User = require('./models/users');
const app = express();
const bcrypt = require('bcrypt');
const jsonwt = require("jsonwebtoken");
var key = require("./mysetup/myurl");

const saltRounds = 10

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Passport middleware
app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Route to create new user
app.post("/signup", async (req, res) => {
  console.log(req.body)
  var newUser = new User({
    username: req.body.username,
    email:req.body.email,
    password: req.body.password
  });
  await User.findOne({ username: newUser.username })
    .then(async profile => {
      if (!profile) {
        bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
            await newUser
              .save()
              .then(() => {
                res.status(200).send(newUser);
              })
              .catch(err => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
});

// Route for user to login
app.post("/login", async (req, res) => {
  var newUser = {};
  newUser.username = req.body.username;
  newUser.password = req.body.password;

  await User.findOne({ username: newUser.username })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          async (err, result) => {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              res.send("User authenticated");
              const payload = {
                id: profile.id,
                username: profile.username
              };
              jsonwt.sign(
                payload,
                key.secret,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) {
                    console.log("Error is ", err.message);
                  }
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              res.send("User Unauthorized Access");
            }
          }
        );
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});

// Get Router
app.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username
    });
  }
);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/date-movie");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
