import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});

export default app;
