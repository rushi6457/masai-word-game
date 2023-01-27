const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name:{type:String,required:true},
    difficulty:{type:String,enum:['High',"Medium","Low"]},
    score:{type:Number,default:0},
  },
  { timestamps: true }
);
const UserModel = model("user", UserSchema);
module.exports = UserModel;