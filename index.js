const express= require("express")

const { userRouter } = require("./routes/user.route")
const { connection } = require("./db")


require('dotenv').config()



const app=express()
app.use(express.json())
app.use("/user",userRouter)

// app.get("/",async(req,res)=>{
//     try {
//         const data= await userModel.find()
//         res.send(data)
        
//     } catch (error) {
//         res.status(500).send(error)
//     }

// res.send({"msg":"this is the home route"})
// })

//create



app.listen(process.env.port ,async()=>{
 try {
    await connection
    console.log("connected to mongodb")
 } catch (error) {
    console.log("unable to connect to mongodb")
    console.log(error)
 }
 console.log(`server is running on port ${process.env.port}`)
})