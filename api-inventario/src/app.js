import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/DB.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api", productRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto http://localhost:${PORT}`);
});
