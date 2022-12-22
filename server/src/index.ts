import express, { Request, Response } from "express";

const app = express();

app.get("/hi", (req: Request, res: Response) => {
  res.send("Hello worlddd");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
