import mongoose from "mongoose";

const { Schema } = mongoose;
// const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new Schema({
  title: String,
});

const deckModel = mongoose.model("Deck", DeckSchema);

export default deckModel;
