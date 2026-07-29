import { Router } from "express";

import { OpportunityController } from "./opportunity.controller.js";

const router = Router();

const opportunityController = new OpportunityController();

router.post(
  "/",
  opportunityController.createOpportunity.bind(opportunityController)
);

export default router;