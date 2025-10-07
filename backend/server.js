require('dotenv').config()
const mongoose=require('mongoose')
const express=require("express");
const app=express()
const blogRoute=require("./routes/blog-route")


const connect=async()=>{
 const m=await mongoose.connect(process.env.Mongo_DB_URI)
 if(m){
    console.log("connected sucessfully!")
 }
}
connect()
app.use(express.json())

app.use("/api/blog",blogRoute)

app.listen("3000",()=>{
    console.log("its working!!")
})
