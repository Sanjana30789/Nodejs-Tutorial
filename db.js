// Connect MongoDB with Nodejs
const mongoose = require('mongoose');
require('dotenv').config();
// Define the mongobd url
// const mongourl = 'mongodb://localhost:27017/travels';
const mongourl = process.env.MONGODB_URL;

// Setup Connection 
mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection;

// Define event listerners to check status of database 
db.on('connected',()=>{
    console.log('Connected to MongoDB');
})

db.error('error',()=>{
    console.log('Error Occured');
})

db.on('disconnected',()=>{
    console.log('DisConnected to MongoDB');
})

// Export the connection 
module.exports = db;