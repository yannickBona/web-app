import { Request, Response } from "express";
import Deck from "../../models/Deck";

export const deleteDeckController = async (req: Request, res: Response) => {
  console.log("Deleting");
  const deckId = req.params.deckId;
  const deletedDeck = await Deck.findByIdAndDelete(deckId);
  console.log(deletedDeck, deckId);
  return res.json(deletedDeck);
};
