const { configDotenv } = require("dotenv")
const mongoose=require("mongoose")
require('dotenv').config()

// async function connection(){
//      try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/web24nxm")
//      } catch (error) {
//         console.log(error)
//      }
// }
// const connection=mongoose.connect("mongodb://127.0.0.1:27017/metaUsers")
const connection=mongoose.connect(process.env.mongoURL)




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
    userModel,connection
}
