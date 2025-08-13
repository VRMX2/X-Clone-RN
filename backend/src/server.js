import express from 'express';
import "dotenv/config";
import cors from "cors";
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";


const app = express();


app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());



app.get("/api/health", (req, res) => {
    res.status(200).json({status: "ok"});
});


app.use("/api/users",userRoutes);



const startServer = async() => {
	try{
		await connectDB();
        app.listen(ENV.PORT,()=> console.log("Server is up and running on PORT",ENV.PORT));
	}
	catch(error){
		console.error("Failed to start server", error.message);
        process.exit(1);
	}
};

startServer();