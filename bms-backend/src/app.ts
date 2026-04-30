import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/index";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("api/v1", router);


// Global error handler (MUST be after all routes)

app.get("/", (_, res) => {
  res.json({
    message: "Welcome to LEOShows API",
  });
});

export default app;
