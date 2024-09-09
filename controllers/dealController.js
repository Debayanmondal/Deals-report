// /controllers/dealController.js
import Deal from "../models/Deal.js";

// Fetch deals with dynamic filters
export const getFilteredDeals = async (req, res) => {
  try {
    const filters = {};

    // Apply filters dynamically based on query params
    if (req.query.salesperson) {
      filters.salesperson = req.query.salesperson;
    }

    if (req.query.dealType) {
      filters.dealType = req.query.dealType;
    }

    if (req.query.stage) {
      filters.stage = req.query.stage;
    }

    if (req.query.leadSource) {
      filters.leadSource = req.query.leadSource;
    }

    if (req.query.probability) {
      filters.probability = { $gte: parseFloat(req.query.probability) };
    }

    if (req.query.status) {
      filters.status = req.query.status;
    }

    if (req.query.dateCreated) {
      const startDate = new Date(req.query.dateCreated);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(req.query.dateCreated);
      endDate.setHours(23, 59, 59, 999);
      filters.dateCreated = { $gte: startDate, $lte: endDate };
    }

    if (req.query.closingDate) {
      const startDate = new Date(req.query.closingDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(req.query.closingDate);
      endDate.setHours(23, 59, 59, 999);
      filters.closingDate = { $gte: startDate, $lte: endDate };
    }

    // Fetch deals based on filters
    const deals = await Deal.find(filters);
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
