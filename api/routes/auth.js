const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
//REGISTER

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    const user = await newUser.save();
    res.status(200).json({_id:user.id, name:user.username,email:user.email,token:generateToken(user._id)});
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");
    
    //const {password, ...others} = user._doc;
    res.status(200).json({_id:user.id,name:user.username,email:user.email,token:generateToken(user._id)});
  } catch (err) {
    res.status(500).json(err);
  }
});

//GENERATE JWT

const generateToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn:'30d',
  })
}

module.exports = router;
