var mongoose = require('mongoose');
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
module.exports = Users = mongoose.model('Users',UserSchema);