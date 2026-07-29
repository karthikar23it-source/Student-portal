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

  /**
   * Browse opportunities with pagination
   */
  async browseOpportunities(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [opportunities, total] = await Promise.all([
      Opportunity.find({ isArchived: false })
        .select(
          "_id title organization category deadline upvoteCount"
        )
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),

      Opportunity.countDocuments({
        isArchived: false,
      }),
    ]);

    return {
      opportunities,
      total,
    };
  }
}