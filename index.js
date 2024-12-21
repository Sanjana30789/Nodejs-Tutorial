// Creating a web server 

// const http = require('http');
// const myserver = http.createServer((req,res)=> {
//     console.log("Hello Sanjana")
//     res.end("Hello from server")
// })


// myserver.listen(8000,()=>{
//     console.log("Server is successfully running on port 8000 ")
// })


// function add(a,b){
//     return a+b;
// }

// var result = add(10,7);
// console.log(result);


// (
//     function(){
//         console.log("Hello Sanjana");
//     })();

// Callback function 
// function callback(){
//     console.log("Addition is completed");
// }

// const add = function(a,b,sanjana){
//     const result = a+b;
//     console.log("Result is " +result);
//     sanjana();
// }

// add(3,4,function(){
//     console.log("add completed")
// });

// const fs = require('fs');
// const os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hey ' + user.username + '!\n',()=>{
//     console.log("File created successfully")
// })

// const sample = require('./first.js');
// var _ = require('lodash');

// const result = sample.age;
// var results = sample.addition(result+18,20);
// console.log(result);
// console.log(results);

// var data = ["data",1,2,2,2,1,"name","age","age"];
// var unique = _.uniq(data);
// console.log(unique);

// json(string format) to object 

// const jsonstring = '{"name":"Sanjana","age": 20,"city":"Mumbai"}';
// const jsonobject = JSON.parse(jsonstring)
// console.log(jsonobject);

// Object to json 
// const objects = {
//     name : 'sanjana',
//     age :20,
// }
// const jsonstrings = JSON.stringify(objects);
// console.log(jsonstrings);

// Creating a basic server 
const express = require('express');
const app = express();
const db = require('./db');

const bodyparser = require('body-parser');
app.use(bodyparser.json())

app.get('/', function(req,res){
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


// This will run on the port no 500
app.listen(500)