const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  img1:{
    type:String,
    required:true
  },
  img2:{
    type:String,
    required:true
  },
  img3:{
    type:String,
    required:true
  },
  description1:{
    type:String,
    required:true
  },
  distribution: {
    type: Number,
    require: true,
    trim: true,
  },
  transction: {
    type: Number,
    require: true,
    trim: true,
  },
  roomrent: {
    type: Number,
    require: true,
    trim: true,
  },
  totalContacts: {
    type: Number,
    require: true,
    trim: true,
  }
});

const UserModel = mongoose.model("home", UserSchema);

module.exports = UserModel;

