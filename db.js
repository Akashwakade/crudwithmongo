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





module.exports={
   connection
}