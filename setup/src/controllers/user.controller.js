const { model } = require("mongoose")
const {asyncHandler} = require("../utils/asyncHandler.js")


const registerUser = asyncHandler(async(req,res)=>{
    res.status(500).json({
        message:"success"
    })
})
module.exports = {
    registerUser
}