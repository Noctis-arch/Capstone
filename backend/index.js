import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/reviews", reviewRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("GameVault Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});