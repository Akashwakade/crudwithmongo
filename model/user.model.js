const { default: mongoose } = require("mongoose")


//models and schemas
const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    is_Married:Boolean,
    language:String
}, { versionKey: false }
)
const userModel=mongoose.model("user",userSchema)
module.exports={
    userModel
}