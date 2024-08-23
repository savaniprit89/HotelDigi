import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String},
    password:{type:String,required:true},
    country:{type:String},
    city:{type:String},
    img:{type:String},
    isAdmin:{type:Boolean,default:false}
},{timestamps:true})

export default mongoose.model('User',userSchema)