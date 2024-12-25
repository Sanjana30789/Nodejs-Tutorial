const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username:{
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
})

personschema.pre('save',async function(next){
    const person = this; // this is the document being saved
    // hash the password if it is modiefied or its a new record 
    if(!person.isModified('password')) return next();
    try {
        // define the salt
        const salt = await bcrypt.genSalt(10);
        // now hashing the password
        const hashedPassword = await bcrypt.hash(person.password, salt);
        // override the plain password to hashed password
        person.password = hashedPassword;
        next(); // a callback function provided by mongoose
    } catch (error) {
        return next(error);
    }
})


personschema.methods.comparePassword = async function(candidatePassword){
    try {
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

// Create Person Model after preparing the entire schema 
const Person = mongoose.model('Person',personschema);
module.exports = Person;