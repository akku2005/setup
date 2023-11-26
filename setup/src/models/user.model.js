const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        fullName:
        {
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avtar:{
            type:String, //we will use cloudnary to store images as url
            required:true
        },
        coverImage:
        {
            type:String
        },
        watchHistory:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "video"
        },
        password:
        {
            type:String,
            required:[true,"Pasword is required"]
        },
        refreshToken:
        {
            type:String
        }
    },
    {timestamps: true}
    
)
userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password,10)
    next()
})
userSchema.method.isModifiedCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
module.exports = mongoose.model("User",userSchema);