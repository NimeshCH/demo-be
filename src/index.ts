import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import indexRoute from "./routes/index.routes";
import cors from "cors";
import AppError from "./utils/app-error";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
console.log([...JSON.parse(process.env.ALLOWED_ORIGINS || "[]")]);
app.use(
  cors({
    origin: [...JSON.parse(process.env.ALLOWED_ORIGINS || "[]")],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })
);
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running fine" });
});
app.use("/api", indexRoute);

// Global Error handler
app.use((error: any | any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = error?.statusCode;
  if (!error.statusCode) {
    statusCode = 500;
  }
  return res.status(error?.statusCode || 500).json({
    status: error?.status || "error",
    statusCode: error?.statusCode,
    message: error?.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(` Server is running at http://localhost:${port}`);
});
