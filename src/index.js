//require('dotenv').config();
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
  path: "./env",
});

connectDB();

/*( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on('error',(error)=>{
            console.log("Error in Express app:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        }

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error
    }
})();

*/
