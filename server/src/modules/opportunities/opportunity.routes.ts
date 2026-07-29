import { Router } from "express";

import { OpportunityController } from "./opportunity.controller.js";

const router = Router();

const opportunityController = new OpportunityController();

/**
 * Search & Filter opportunities
 * GET /api/opportunities/search
 */
router.get(
  "/search",
  opportunityController.searchFilterOpportunities.bind(
    opportunityController
  )
);

/**
 * Browse opportunities
 * GET /api/opportunities?page=1&limit=10
 */
router.get(
  "/",
  opportunityController.browseOpportunities.bind(opportunityController)
);

/**
 * Upvote opportunity
 * POST /api/opportunities/:opportunityId/upvote
 */
router.post(
  "/:opportunityId/upvote",
  opportunityController.upvoteOpportunity.bind(
    opportunityController
  )
);

/**
 * Report opportunity
 * POST /api/opportunities/:opportunityId/report
 */
router.post(
  "/:opportunityId/report",
  opportunityController.reportOpportunity.bind(
    opportunityController
  )
);

/**
 * View opportunity detail
 * GET /api/opportunities/:opportunityId
 */
router.get(
  "/:opportunityId",
  opportunityController.viewOpportunityDetail.bind(opportunityController)
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