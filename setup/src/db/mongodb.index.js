require('dotenv').config({path:'./.env'})
const {DB_NAME} = require("../constants.js")
const mongoose = require("mongoose")

const connectDB = async () =>{
    try {
        const connectingInstance = await mongoose.connect(`${process.env.CONNECTING_URI}/${DB_NAME}`)
        console.log(`mongoDB is connected ${connectingInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection failed`,error);
        process.exit(1)
    }
}
module.exports={
    connectDB
}
console.log(connectDB);