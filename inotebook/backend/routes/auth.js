const express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "MESHV@231";

//Create user Using :POST  '/api/auth/createuser'. No login required
router.post('/createuser',
    body('name',"plz enter your correct name...").isLength({ min: 5 }),
    // body('number',"plz enter your correct name...").isLength({ min: 10 }),
    // password must be at least 5 chars long
    body('password',"password must be atleast 5 character...").isLength({ min: 5 }),
    body('email').isEmail()
    ,async (req, res) => {
    let success = false;

        //if there are error then return error array(bad request)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success,errors: errors.array() });
        }
        //check wheter user's email exitst??

        try{

        let user =await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({ success,errors: "sorry, a user is already exists with this email"});
        }

        const salt =await bcrypt.genSalt(10);
       let secPass =await bcrypt.hash(req.body.password,salt);
        //create user
       user = await User.create({
            name: req.body.name,
            password: secPass,
            email:req.body.email
            // number:req.body.number,
          })
          
        //   .then(user => res.json(user))
        //     .catch(err => {console.log(err),
        //         res.json({error: "plz enter unique value of email..."})
        //     })

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken= jwt.sign(data,JWT_SECRET);
        // console.log(jwtData);
        success = true
        res.json({success , authtoken})
        }
        catch(error){
            console.error(error.message);
            res.status(500).send("some error occured");
        }
    })



// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', 
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
  , async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
  
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  
  });


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  module.exports = router