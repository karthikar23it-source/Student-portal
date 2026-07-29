import type { Request, Response } from "express";

import { OpportunityService } from "./opportunity.service.js";
import { createOpportunitySchema } from "./opportunity.validation.js";

const opportunityService = new OpportunityService();

export class OpportunityController {
  async createOpportunity(req: Request, res: Response) {
    try {
      // Validate request body
      const data = createOpportunitySchema.parse(req.body);

      // Call service
      const result =
        await opportunityService.createOpportunity(data);

      // Success response
      return res.status(201).json(result);
    } catch (error: any) {
      console.error("====== CREATE OPPORTUNITY ERROR ======");
      console.error(error);
      console.error("======================================");

      // Handle duplicate opportunity
      if (
        typeof error.message === "string" &&
        error.message.startsWith("DUPLICATE_OPPORTUNITY:")
      ) {
        const matchedOpportunityId =
          error.message.split(":")[1];

        return res.status(409).json({
          error: "DUPLICATE_OPPORTUNITY",
          matchedOpportunityId,
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }

  /**
   * Browse opportunities
   * GET /api/opportunities?page=1&limit=10
   */
  async browseOpportunities(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      const result =
        await opportunityService.browseOpportunities(
          page,
          limit
        );

      return res.status(200).json(result);
    } catch (error: any) {
      console.error("====== BROWSE OPPORTUNITIES ERROR ======");
      console.error(error);
      console.error("========================================");

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }

  /**
   * View opportunity detail
   * GET /api/opportunities/:opportunityId
   */
  async viewOpportunityDetail(req: Request, res: Response) {
    try {
      const { opportunityId } = req.params;

      const result =
        await opportunityService.viewOpportunityDetail(
          opportunityId
        );

      return res.status(200).json(result);
    } catch (error: any) {
      console.error("====== VIEW OPPORTUNITY DETAIL ERROR ======");
      console.error(error);
      console.error("===========================================");

      if (error.message === "OPPORTUNITY_NOT_FOUND") {
        return res.status(404).json({
          error: "OPPORTUNITY_NOT_FOUND",
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }
}