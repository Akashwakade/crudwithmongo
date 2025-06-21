const express= require("express")
const { connection } = require("mongoose")
const { userModel } = require("./db")


require('dotenv').config()



const app=express()
app.use(express.json())

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

app.post("/addUser",async (req,res)=>{
    try {
          const payload=req.body
        const user=new userModel(payload) //this is for single user only for multiple we can use insertMany with array
        await user.save()
        res.send({"msg":"user has been added to db"})
    } catch (error) {
        console.log(error)
        res.status(400).send("data not added to db")
    }
  
})

//read
app.get("/users",async(req,res)=>{
        try {
            const querry=req.query
            const users= await userModel.find(querry)
            res.send(users)
        } catch (error) {
            res.status(400).send(error)
        }
})

//patch
app.patch("/updateUser/:userId",async(req,res)=>{
const {userId}=req.params
const data=req.body
try {
    await  userModel.findByIdAndUpdate({_id:userId},data)
    res.status(200).send({msg:"user has been updated successfully"})
} catch (error) {
    res.status(400).send({msg:"something went wrong with user update"})
}
   

})
//delete
app.delete("/deleteUser/:userId",async(req,res)=>{
    const {userId}=req.params
    try {
    await userModel.findByIdAndDelete({_id:userId})
        res.status(200).send({msg:"user has been deleted successfully"})
    } catch (error) {
        res.status(400).send({msg:"something went wrong for user delete"})
    }
})
//put
app.put("/updateUser/:userId",async(req,res)=>{
const {userId}=req.params
const data=req.body
try {
    await  userModel.findByIdAndUpdate({_id:userId},data)
    res.status(200).send({msg:"user has been updated successfully"})
} catch (error) {
    res.status(400).send({msg:"something went wrong with user update"})
}
   

})

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