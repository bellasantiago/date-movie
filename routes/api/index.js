const router = require("express").Router();
const moviesRoute = require("./movies");
const usersRoute = require("./users");

// Movies routes
router.use("/movies", moviesRoute);

// Users routes
router.use("/users", usersRoute);

module.exports = router;
