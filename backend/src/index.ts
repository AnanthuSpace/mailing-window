import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
const PORT = process.env.PORT || 4000;
import cors from "cors";
import { userRoute } from "./routes/userRoutes";
import { corsOptions } from "./config/coresConfig";
import { dbConnection } from "./config/dbConnect";

const app = express();
dbConnection()
app.use(cors(corsOptions)); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", userRoute)

app.listen(PORT, () => console.log(`Server Status: Running on port ${PORT}`));
export default app;