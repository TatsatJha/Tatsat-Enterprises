import mongoose from "mongoose"
var Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    }
})

mongoose.models = {}

var blog = mongoose.model("blog", blogSchema)
export default blog