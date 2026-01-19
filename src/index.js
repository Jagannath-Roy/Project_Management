import dotenv from "dotenv"
import app from "./app.js"
dotenv.config({
    path : "./.env",
});

import connectDB from "./db/index.js";


const port = process.env.PORT || 8001

connectDB()
.then(()=>{
    app.listen(port,()=>{
    console.log(`App is running at http://localhost:${port}` );
    
})

}).catch((err)=>{
    console.error("MongoDB connection failed",err);
    process.exit(1)
    
})






