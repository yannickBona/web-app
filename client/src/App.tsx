import React, { useEffect, useState } from "react";
import { createDeck } from "./api/decks/createDeck";
import { deleteDeck } from "./api/decks/deleteDeck";
import { getDecks } from "./api/decks/getDecks";
import "./App.css";

type TDeck = {
  _id: string;
  title: string;
};

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  // Create deck
  const handleCreateDeck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newDeck = await createDeck(title);
      setDecks([...decks, newDeck]);
    } finally {
      setTitle("");
    }
  };

  // delete
  const handleDeleteDeck = async (deckId: string) => {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  };

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await getDecks();

      setDecks(decks);
    };

    fetchDecks();
  }, []);

  return (
    <div className="App">
      <h1>DECKS</h1>
      <div className="decks-container">
        {decks.map((deck) => (
          <li key={deck._id}>
            {deck.title}{" "}
            <span onClick={() => handleDeleteDeck(deck._id)}>X</span>
          </li>
        ))}
      </div>

      <form onSubmit={(e) => handleCreateDeck(e)} method="POST">
        <label htmlFor="deck-title">Deck</label>
        <input
          id="deck-title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default App;
