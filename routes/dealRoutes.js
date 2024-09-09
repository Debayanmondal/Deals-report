// /routes/dealRoutes.js
import express from "express";
import { getFilteredDeals } from "../controllers/dealController.js";

const router = express.Router();

// Route to fetch deals with dynamic filters
router.get("/deals", getFilteredDeals);

export default router;
