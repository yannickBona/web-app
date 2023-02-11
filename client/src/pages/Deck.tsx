import React, { useEffect, useState } from "react";
import { getDeck } from "../api/decks/getDeck";
import { useParams } from "react-router-dom";
import "../App.css";
import { createCard } from "../api/cards/createCard";
import { TDeck } from "../App";
import { deleteCard } from "../api/cards/deleteCard";

function Deck() {
  const [title, setTitle] = useState("");
  const [deck, setDeck] = useState<TDeck>();
  const [cards, setCards] = useState<string[]>();

  const { deckId } = useParams();

  // Create deck
  const handleCreateCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const deck = await createCard(title, deckId!);
      setCards(deck.cards);
    } finally {
      setTitle("");
    }
  };

  // delete
  const handleDeleteCard = async (index: number) => {
    await deleteCard(index, deckId!);
    // setCards(decks.filter((deck) => deck._id !== deckId));
  };

  useEffect(() => {
    const fetchDeck = async () => {
      const deck = await getDeck(deckId!);

      setDeck(deck);
      setCards(deck.cards);
    };

    fetchDeck();
  }, [cards]);

  return (
    <div className="App">
      <h1>{deck?.title}</h1>

      <div className="decks-container">
        {cards?.map((card, idx) => (
          <li key={idx}>
            {card}
            <span onClick={() => handleDeleteCard(idx)}>X</span>
          </li>
        ))}
      </div>

      <form onSubmit={(e) => handleCreateCard(e)} method="POST">
        <label htmlFor="card-title">Card</label>
        <input
          id="card-title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default Deck;
