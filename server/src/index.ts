import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

import mongoose from "mongoose";
import Deck from "./models/Deck";
import cors from "cors";

import { logMessage } from "./utils/helpers";
import { getDecksController } from "./controller/decks/getDecksController";
import { createDeckController } from "./controller/decks/createDeckController";
import { deleteDeckController } from "./controller/decks/deleteDeckController";
import { getDeckController } from "./controller/decks/getDeckController";
import { createCardController } from "./controller/cards/createCardController";
import { deleteCardController } from "./controller/cards/deleteCardController";

mongoose.set("strictQuery", true);
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// decks
app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.get("/decks/:deckId", getDeckController);

// cards
app.post("/cards/:deckId", createCardController);
app.delete("/decks/:deckId/cards/:cardIdx", deleteCardController);

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
