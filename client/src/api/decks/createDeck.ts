import { API_URL } from "..";

export const createDeck = async (title: string) => {
  const response = await fetch(`${API_URL}/decks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });

  const data = response.json();

  return data;
};
