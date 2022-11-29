const express = require("express");
const homeSchema = require("../models/homeSchema");
const Router = express.Router();
const userSchema = require("../models/homeSchema");

Router.get("/", async (req, res) => {
  try {
    return res.status(200).send("Welcome to Home Screen");
  } catch (error) {
    return res.status(400).send(err.message);
  }
});

Router.post("/register", async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const email = req.body.email;
    const number = req.body.number;
    const Year = req.body.Year;
    const Rollno = req.body.Rollno;
    const StudentID = req.body.StudentID;
    const lastname = req.body.lastname;
    const Branch = req.body.Branch;

    const userData = new homeSchema({
      firstname,
      lastname,
      Rollno,
      StudentID,
      Branch,
      Year,
      number,
      email,
    });
    const useremail = await homeSchema.findOne({ email: email });
    if (!useremail) {
      userData.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            success: true,
            msg: "user registered successfully !",
          });
        }
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "user already exists!",
      });
    }

    // const useremail = await homeSchema.findOne({email:email});
    // if(email === useremail.email){
    //     res.status(400).json({
    //         success: false,
    //         msg: "User already exists !",
    //       });
    // }else{
    //     console.log('err');
    // }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// //login

// Router.post('/login', (req,res)=>{
//     const{
//         email,
//         password
//     } = req.body;

//     homeSchema.findOne({email:email},(err,result)=>{
//       if(email === result.email){
//         res.render('mainpage')
//       }else{
//         console.log(err);
//       }

//     } )
// })

module.exports = Router;
