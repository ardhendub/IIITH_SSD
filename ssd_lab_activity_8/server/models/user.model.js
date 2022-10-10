const mongoose = require('mongoose')
const User = new mongoose.Schema({
    roll:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, require:true}
},
{
    collection:'User-data'
})

const model = mongoose.model('UserData',User)
module.exports = model