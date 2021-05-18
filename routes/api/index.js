const router = require("express").Router();
const moviesRoute = require("./movies");

// Books routes
router.use("/movies", moviesRoute);

module.exports = router;
