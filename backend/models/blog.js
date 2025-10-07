const mongoose=require('mongoose')
const Blogschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        
    },

},{timestamps:true})

module.exports=mongoose.model('Blog',Blogschema)