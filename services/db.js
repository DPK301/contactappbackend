const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ContactAppData');
const contact = mongoose.model('contact',{
    address:{
    gelocation:{
       lat:String,
       long:String
    },
    city:String,
    street:String,
    number:Number,
    zipcode:String},
    id:String,
    email:String,
    username:String,
    name:{
        firstname:String,
        lastname:String
    },
phone:String,
__v:Number})

module.exports={
    contact
}

