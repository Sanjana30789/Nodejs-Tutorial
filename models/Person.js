const mongoose = require('mongoose');

// Define the person schema 
const personschema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    age : {
        type : Number,
        required : true
    },
    work : {
        type : String,
        // Using enum to tell only these fields can be filled
        enum : ['Owner','waiter','manager'],
        required : true
    },
    Mobile : {
        type : Number,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    salary : {
        type : Number,
        required : true
    }
})


// Create Person Model after preparing the entire schema 
const Person = mongoose.model('Person',personschema);
module.exports = Person;