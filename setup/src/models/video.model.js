const mongoose = require("mongoose")
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2")
const VideoSchema = new mongoose.Schema(
    {
        videoFile:
        {
            type:String,
            required:true,
        },
        thumbnail:
        {
            type:String,
            required:true
        },
        title:
        {
            type:String,
            required:true
        },
        description:
        {
            type:String,
            required:true
        },
        duration:
        {
            type:Number,
            required:true
        },
        views:
        {
            type:Number,
            default:0
        },
        isPublished:{
            type:String,
            required:true
        },
        owner:
        {
            type:Schame.Types.ObjectId,
            ref:"User"
        },
    },
    {
        timestamps:true
    }
    
)
VideoSchema.plugin(mongooseAggregatePaginate);
module.exports = mongoose.Schema("VideoSchema",VideoSchema)