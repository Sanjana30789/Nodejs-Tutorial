const mongoose = require('mongoose');

const menuitems = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
     },
     taste : {
        type : String,
        enum : ['sweet','sour','spicy'],
        required : true,
     }

})


const Menu = mongoose.model('Menu',menuitems);
module.exports = Menu;