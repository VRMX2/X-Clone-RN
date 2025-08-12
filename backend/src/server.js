import express from 'express';
import "dotenv/config";
import cors from "cors";

const port = process.env.PORT || 7500;
const app = express();


app.use(express.json({limit:"10mb"}));
app.use(cors());


app.get("/api/health", (req, res) => {
    res.status(200).json({status: "ok"});
});



app.listen(port, () => {
	console.log(`🌐 Server running on port ${port}`);
});