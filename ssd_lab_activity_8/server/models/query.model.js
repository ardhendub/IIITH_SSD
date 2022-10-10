const mongoose = require('mongoose')

const QueryData = new mongoose.Schema({
    roll:{type:String,required:true},
    exam:{type:String,required:true},
    course:{type:String,required:true},
    question:{type:String,required:true},
    ta:{type:String,required:true},
    stuComment:{type:String,required:true},
    taComment:{type:String}
},
{
    collection:'Query-data'
})

const model2 = mongoose.model('Quer',QueryData)
module.exports = model2