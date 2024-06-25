import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ 
    path: "./env" 
})



connectDB()
.then(()=>{
    app.on((err)=>{
        console.log("ERROR 404 check the network !!",err);
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db is connection failed !!!", err);
})





/*   this will make in indutrial appr.

import express from "express";
const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error);
        throw error
    }
})()


*/