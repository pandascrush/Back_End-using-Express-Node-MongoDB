const mongoose = require('mongoose')

const UserShema = mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            unique:true
        },
        password:String,
        phonenumber:Number,
        dob:String
    },
    {
        timestamps:true
    }
)

const UserModel = mongoose.model('registration',UserShema)

module.exports = {UserModel}
