import Deck from "../../models/Deck";
import { Request, Response } from "express";
import { logMessage } from "../../utils/helpers";

export const createDeckController = async (req: Request, res: Response) => {
  logMessage("info", "Creating new deck...");
  const newDeck = new Deck({
    title: req.body.title,
  });

  const savedDeck = await newDeck.save();
  logMessage("info", "New deck saved");

  return res.json(savedDeck);
};
