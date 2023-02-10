import { API_URL } from "..";

export const getDecks = async () => {
  const decks = await fetch(`${API_URL}/decks`).then((res) => res.json());

  return decks;
};
