import { API_URL } from "..";
import { TDeck } from "../../App";

export const getDeck = async (deckId: string): Promise<TDeck> => {
  const response = await fetch(`${API_URL}/decks/${deckId}`);

  return response.json();
};
