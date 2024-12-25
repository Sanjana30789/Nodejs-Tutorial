// Creating a basic server 
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyparser = require('body-parser');
app.use(bodyparser.json())

// Middleware Functions 
// const logRequest = (req,res,next)=>{
//     console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}`);
//     next();
// }

// app.use(logRequest);
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false});

app.get('/',localAuthMiddleware,function(req,res){
    res.send("Hello world im from server")
})

app.get('/about',(req,res) => {
    res.send("this is about page")
})

// Importing the routers
const personRoutes = require('./routes/personRoutes')
// use the routers
app.use('/person',personRoutes)

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

const PORT = process.env.PORT || 3000;
// This will run on the port no 500
app.listen(PORT,()=>{
    console.log("Listening on port 3000");
})