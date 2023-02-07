import React, { useEffect, useState } from "react";
import "./App.css";

type TDeck = {
  _id: string;
  title: string;
};

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  const handleCreateDeck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:3000/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await fetch("http://localhost:3000/decks").then((res) =>
        res.json()
      );

      setDecks(decks);
    };

    fetchDecks();
  }, []);

  return (
    <div className="App">
      <h1>DECKS</h1>
      <div className="decks-container">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
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
