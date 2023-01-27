const UserModel = require("../models/userModel");
const NewUser = async(req,res) =>{
         const { name, difficulty } = req.body;
  try {
    let newUser = await new UserModel({ name, difficulty });
    res.json({ message: "success", response: newUser });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
}

const Rankings = async(req,res) =>{

    try {
    let newUser = await UserModel.find({});
    newUser = newUser.sort((a, b) => b.score - a.score);
    res.json({ message: "success", response: newUser });
  } catch (e) {
    res.status(500).json({ message: "error", response: e.message });
  }
}


module.exports = {
    NewUser,
    Rankings,
};