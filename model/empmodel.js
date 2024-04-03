const mongoose = require('mongoose')

const EmpShema = mongoose.Schema({
    Name:String,
    Age:Number,
    Course:String
})

const EmpModel = mongoose.model('employers',EmpShema)

module.exports = {EmpModel}