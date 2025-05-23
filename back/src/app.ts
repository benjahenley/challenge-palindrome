import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import palindromeRoutes from "./routes/palindrome.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", palindromeRoutes);

export default app;
