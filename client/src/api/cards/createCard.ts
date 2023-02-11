import { API_URL } from "..";
import { TDeck } from "../../App";

export const createCard = async (
  title: string,
  deckId: string
): Promise<TDeck> => {
  const response = await fetch(`${API_URL}/cards/${deckId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: title,
    }),
  });

  const data = response.json();

  return data;
};
