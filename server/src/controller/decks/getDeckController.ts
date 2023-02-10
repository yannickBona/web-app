import { Request, Response } from "express";
import Deck from "../../models/Deck";

export const getDeckController = async (req: Request, res: Response) => {
  const deckId = req.params.deckId;
  console.log(deckId);

  const deck = await Deck.findById(deckId);
  return res.json(deck);
};
