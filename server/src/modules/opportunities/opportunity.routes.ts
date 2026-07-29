import { Router } from "express";

import { OpportunityController } from "./opportunity.controller.js";

const router = Router();

const opportunityController = new OpportunityController();

/**
 * Browse opportunities
 * GET /api/opportunities?page=1&limit=10
 */
router.get(
  "/",
  opportunityController.browseOpportunities.bind(opportunityController)
);

/**
 * Create opportunity
 * POST /api/opportunities
 */
router.post(
  "/",
  opportunityController.createOpportunity.bind(opportunityController)
);

export default router;