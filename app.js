const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser")
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
require("./db/conn")


const UserSchema = new mongoose.Schema({
    
    name:String,
    email: String,
    password:String,
    reEnterPassword:String
    
})
const User = mongoose.model('User',UserSchema);
app.get("/",function(req,res){
    res.send("Hello");
})


app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post('/register',function(req,res){
    console.log(req.body)
    const user = new User({name: req.body.name,email:req.body.email,password:req.body.password, reEnterpassword:req.body.reEnterPasswordpassword})
    user.save(function(err){
        if(!err)console.log("Sucessfully added data");
        else console.log(err);
    });
})

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen((process.env.PORT||4500),function(){
    console.log("server running on port 4500");
})