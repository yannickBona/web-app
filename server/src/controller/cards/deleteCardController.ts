import { Request, Response } from "express";
import Deck from "../../models/Deck";

export const deleteCardController = async (req: Request, res: Response) => {
  console.log("Deleting");
  const { deckId, cardIdx } = req.params;
  const deck = await Deck.findById(deckId);
  if (!deck) return;

  deck.cards.splice(+cardIdx, 1);
  deck.save();
  return res.json(deck.cards);
};
