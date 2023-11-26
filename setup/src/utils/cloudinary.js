import { v2 as cloudinary } from 'cloudinary'
const fs = require('fs')

cloudinary.config({ 
    cloud_name: process.env.CLOUDNIRY_CLOUD_NAME, 
    api_key: process.env.CLOUDNIRY_API_KEY, 
    api_secret: process.env.CLOUDNIRY_SECRET_KEY 
  });

const uploadOnCloudinary = async (localFilePath)=>{
  try{
    if(!localFilePath) return null
    //upload the file on clodinary
    const respone = await cloudinary.uploader.upload(localFilePath,
      {
        resource_type: "auto"
      })
      console.log("file is uploaded on cloudinary",respone.url);
      return respone;
  }catch(error){
    fs.unlinkSync(localFilePath)
    //remove the locally saved temporay file as the upload operation got failed
    return null;
  }
}
module.exports={
  uploadOnCloudinary
}