import { API_URL } from "..";

export const deleteCard = async (
  index: string,
  deckId: number
): Promise<string[]> => {
  const newCards = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
    method: "DELETE",
  });

  return newCards.json();
};
