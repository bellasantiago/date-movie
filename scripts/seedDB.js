const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/date-movie");

const movieSeed = [
  {
    title: "Avatar",
    source: "5PSNL1qE6VY"
  }, {
    title: "Scarface",
    source: "7pQQHnqBa2E"
  }, {
    title: "The Notebook",
    source: "yDJIcYE32NU"
  }, {
    title: "Audition",
    source: "EBQHp2__AVQ"
  }, {
    title: "Young Frankenstein",
    source: "ZL9Q_0JtMNA"
  }, {
    title: "The One Percent",
    source: "Nva4s76JW_o"
  }, {
    title: "Cinderella Man",
    source: "DlbHzcH4VJY"
  }, {
    title: "Bad Boys",
    source: "Xm12NSa8jsM"
  }, {
    title: "Unforgiven",
    source: "ftTX4FoBWlE"
  }, {
    title: "Leon: The Professional",
    source: "jawVxq1Iyl0"
  }, {
    title: "Love & Basketball",
    source: "Ur83i6_BjbE"
  }, {
    title: "The Hurt Locker",
    source: "AIbFvqFYRT4"
  }, {
    title: "Princess Bride",
    source: "WNNUcHRiPS8"
  }, {
    title: "Inside Man",
    source: "FSH-dbbiroI"
  }, {
    title: "Bill & Ted’s Bogus Journey",
    source: "iHIWmKB8GR4"
  }, {
    title: "Mr. & Mrs. Smith",
    source: "CZ0B22z22pI"
  }, {
    title: "Love Actually",
    source: "H9Z3_ifFheQ"
  }, {
    title: "Good Will Hunting",
    source: "PaZVjZEFkRs"
  }, {
    title: "Where The Buffalo Roam",
    source: "_ZT6fziaIIw"
  }, {
    title: "Back to the Future",
    source: "qvsgGtivCgs"
  }, {
    title: "Grandma’s Boy",
    source: "Bi5CfCHknZs"
  }, {
    title: "The Shawshank Redemption",
    source: "6hB3S9bIaco"
  }, {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    source: "naQr0uTrH_s"
  }, {
    title: "Network",
    source: "1cSGvqQHpjs"
  }, {
    title: "Braveheart",
    source: "1NJO0jxBtMo"
  }, {
    title: "Gandhi",
    source: "B7I6D3mSYTE"
  }, {
    title: "Caddyshack",
    source: "x9Nl39uWEYk"
  }, {
    title: "Dark Knight",
    source: "EXeTwQWrcwY"
  }, {
    title: "The Iron Giant",
    source: "doSJxiYp9yo"
  }, {
    title: "Forrest Gump",
    source: "bLvqoHBptjg"
  }
];

db.Movies.remove({})
  .then(() => db.Movies.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const userSeed = [
  {
    username: "John Appleseed",
    email: "test@test.com",
    password: "123456",
    movies: [
      {
        _id: "",
        title: "",
        source: "",
      }
    ]
  }
]

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });