import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong 🏓");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/not-found", (req, res) => {
  res.status(400).json({ status: "Not found lol" });
});

app.get("/error", (req, res) => {
  res.status(500).json({ status: "Internal server error" });
});
export default app;
