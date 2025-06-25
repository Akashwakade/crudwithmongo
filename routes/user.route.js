const express=require("express")
const { Router } = require("express")
const { userModel } = require("../model/user.model")


const userRouter=Router()

userRouter.post("/add",async (req,res)=>{
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
userRouter.get("/",async(req,res)=>{
        try {
            const querry=req.query
            const users= await userModel.find(querry)
            res.send(users)
        } catch (error) {
            res.status(400).send(error)
        }
})

//patch
userRouter.patch("/update/:userId",async(req,res)=>{
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
userRouter.delete("/delete/:userId",async(req,res)=>{
    const {userId}=req.params
    try {
    await userModel.findByIdAndDelete({_id:userId})
        res.status(200).send({msg:"user has been deleted successfully"})
    } catch (error) {
        res.status(400).send({msg:"something went wrong for user delete"})
    }
})
//put
userRouter.put("/update/:userId",async(req,res)=>{
const {userId}=req.params
const data=req.body
try {
    await  userModel.findByIdAndUpdate({_id:userId},data)
    res.status(200).send({msg:"user has been updated successfully"})
} catch (error) {
    res.status(400).send({msg:"something went wrong with user update"})
}
   

})

module.exports={
    userRouter
}