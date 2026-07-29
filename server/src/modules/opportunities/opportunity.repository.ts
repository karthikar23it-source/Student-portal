import { Opportunity } from "./models/opportunity.model.js";
import type { IOpportunity } from "./models/opportunity.model.js";

export class OpportunityRepository {
  /**
   * Create a new opportunity
   */
  async createOpportunity(
    opportunityData: Partial<IOpportunity>
  ): Promise<IOpportunity> {
    return Opportunity.create(opportunityData);
  }

  /**
   * Get all active (non-archived) opportunities
   */
  async findAllActiveOpportunities(): Promise<IOpportunity[]> {
    return Opportunity.find({
      isArchived: false,
    });
  }

  /**
   * Find an opportunity by ID
   */
  async findOpportunityById(
    opportunityId: string
  ): Promise<IOpportunity | null> {
    return Opportunity.findById(opportunityId);
  }
}