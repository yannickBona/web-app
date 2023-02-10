import Deck from "../../models/Deck";
import { Request, Response } from "express";

export const getDecksController = async (req: Request, res: Response) => {
  const decks = await Deck.find();
  return res.json(decks);
};
