const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/date-movie");

const movieSeed = [
  {
    title: "Avatar",
    id: "5PSNL1qE6VY"
  },{
    title: "Scarface",
    id: "7pQQHnqBa2E"
  },{
    title: "The Notebook",
    id: "yDJIcYE32NU"
  },{
    title: "Audition",
    id: "EBQHp2__AVQ"
  },{
    title: "Young Frankenstein",
    id: "ZL9Q_0JtMNA"
  },{
    title: "The One Percent",
    id: "Nva4s76JW_o"
  },{
    title: "Cinderella Man",
    id: "DlbHzcH4VJY"
  },{
    title: "Bad Boys",
    id: "Xm12NSa8jsM"
  },{
    title: "Unforgiven",
    id: "ftTX4FoBWlE"
  },{
    title: "Leon: The Professional",
    id: "jawVxq1Iyl0"
  },{
    title: "Love & Basketball",
    id: "Ur83i6_BjbE"
  },{
    title: "The Hurt Locker",
    id: "AIbFvqFYRT4"
  },{
    title: "Princess Bride",
    id: "WNNUcHRiPS8"
  },{
    title: "Inside Man",
    id: "FSH-dbbiroI"
  },{
    title: "Bill & Ted’s Bogus Journey",
    id: "iHIWmKB8GR4"
  },{
    title: "Mr. & Mrs. Smith",
    id: "CZ0B22z22pI"
  },{
    title: "Love Actually",
    id: "H9Z3_ifFheQ"
  },{
    title: "Good Will Hunting",
    id: "PaZVjZEFkRs"
  },{
    title: "Where The Buffalo Roam",
    id: "_ZT6fziaIIw"
  },{
    title: "Back to the Future",
    id: "qvsgGtivCgs"
  },{
    title: "Grandma’s Boy",
    id: "Bi5CfCHknZs"
  },{
    title: "The Shawshank Redemption",
    id: "6hB3S9bIaco"
  },{
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    id: "naQr0uTrH_s"
  },{
    title: "Network",
    id: "1cSGvqQHpjs"
  },{
    title: "Braveheart",
    id: "1NJO0jxBtMo"
  },{
    title: "Gandhi",
    id: "B7I6D3mSYTE"
  },{
    title: "Caddyshack",
    id: "x9Nl39uWEYk"
  },{
    title: "Dark Knight",
    id: "EXeTwQWrcwY"
  },{
    title: "The Iron Giant",
    id: "doSJxiYp9yo"
  },{
    title: "Forrest Gump",
    id: "bLvqoHBptjg"
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
