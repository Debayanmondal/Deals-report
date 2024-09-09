// /models/Deal.js
import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  salesperson: String,
  dealType: String,
  stage: String,
  leadSource: String,
  probability: Number,
  status: String, // e.g., "Open", "Closed", "Lost"
  amount: Number,
  closingDate: { type: Date },
  dateCreated: { type: Date, default: Date.now },
});

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;
