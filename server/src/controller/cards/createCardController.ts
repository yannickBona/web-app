import Deck from "../../models/Deck";
import { Request, Response } from "express";
import { logMessage } from "../../utils/helpers";

export const createCardController = async (req: Request, res: Response) => {
  logMessage("info", "Creating new Card...");
  const { text } = req.body;
  const deckId = req.params.deckId;

  const deck = await Deck.findById(deckId);
  if (!deck) return;
  deck.cards.push(text);
  deck.save();
  console.log("created");

  return res.json(deck);
};
