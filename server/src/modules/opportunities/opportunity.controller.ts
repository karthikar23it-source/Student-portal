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
}