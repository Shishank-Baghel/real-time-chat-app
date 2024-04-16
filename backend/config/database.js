import mongoose from "mongoose";

 const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DATABASE CONNECTED")
    }).catch((error)=>{
        console.log("DB NOT CONNECTED",error)
    });
}

export default connectDB;