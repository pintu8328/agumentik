const { Router } = require("express");
const UserModel = require("../Models/user");
const homerouter = Router()

homerouter.post("/user/home", async (req, res) => {
  console.log(req.body);

  try {
  const newUser = new UserModel({
    img1:req.body.img1,
    img2:req.body.img2,
    img3:req.body.img3,
    description1:req.body. description1,
    distribution: req.body.distribution,
    transction: req.body. transction,
    roomrent: req.body.roomrent,
    totalContacts: req.body.totalContacts
  });
      const userdata= await newUser.save()
      res.send(userdata)
      
  } catch (error) {
      console.log(error)
  }
});

homerouter.get("/user/home",async(req,res)=>{
  try {
      const userdata= await UserModel.find()
      res.send(userdata)
  } catch (error) {
      console.log(error)
  }
})





 


module.exports = homerouter;