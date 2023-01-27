import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

import mongoose from "mongoose";
import Deck from "./models/Deck";

import { logMessage } from "./utils/helpers";

mongoose.set("strictQuery", true);
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.post("/decks", async (req: Request, res: Response) => {
  logMessage("info", "Creating new deck...");
  const newDeck = new Deck({
    title: req.body.title,
  });

  console.log("Deck created");

  const savedDeck = await newDeck.save();
  console.log("Deck saved");

  res.json(savedDeck);
});

// Listen on port after connecting to the DB
console.log("Connecting to the DB...");
mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Unable to connect to the DB:: ${error}`);
  });
