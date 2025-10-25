import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/api";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Routes
app.use("/api", apiRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to RAG Expense Tracker API!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
