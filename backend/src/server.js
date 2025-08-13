import express from 'express';
import "dotenv/config";
import cors from "cors";
import {ENV} from "./config/env";


const app = express();


app.use(express.json({limit:"10mb"}));
app.use(cors());


app.get("/api/health", (req, res) => {
    res.status(200).json({status: "ok"});
});



app.listen(ENV.PORT, () => {
	console.log(`🌐 Server running on port ${ENV.PORT}`);
});