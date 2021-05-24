var mongoose = require('mongoose');
var bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
   username:{
     type:String,
     require:true
   },
   email:{
     type:String,
     require:true
   },
   password:{
    type:String,
    require:true
  },
  movies:{
    type:Array
  }
});

//authenticate input against database
UserSchema.statics.authenticate = function(username, password, callback) {
  User.findOne({ username: username }).exec(function(err, users) {
    if (err) {
      return callback(err);
    } else if (!users) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, users.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

module.exports = Users = mongoose.model('Users',UserSchema);