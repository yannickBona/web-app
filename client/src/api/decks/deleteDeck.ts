import { API_URL } from "..";

export const deleteDeck = async (deckId: string) => {
  const deletedDeck = await fetch(`${API_URL}/decks/${deckId}`, {
    method: "DELETE",
  });

  return deletedDeck;
};
