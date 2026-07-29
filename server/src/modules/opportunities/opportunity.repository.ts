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

  /**
   * View opportunity detail
   */
  async viewOpportunityDetail(
    opportunityId: string
  ): Promise<IOpportunity | null> {
    return Opportunity.findOne({
      _id: opportunityId,
      isArchived: false,
    });
  }

  /**
   * Search & Filter opportunities
   */
  async searchFilterOpportunities(
    keyword: string,
    category: string,
    deadlineRange: string,
    sortBy: string,
    page: number,
    limit: number
  ) {
    const query: any = {
      isArchived: false,
    };

    // Keyword search
    if (keyword) {
      query.$or = [
        {
          title: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          organization: {
            $regex: keyword,
            $options: "i",
          },
        },
      ];
    }

    // Category filter
    if (category) {
      query.category = category;
    }

    // Deadline filter
    if (deadlineRange) {
      const today = new Date();
      const endDate = new Date();

      switch (deadlineRange) {
        case "today":
          endDate.setDate(today.getDate() + 1);
          break;

        case "7days":
          endDate.setDate(today.getDate() + 7);
          break;

        case "30days":
          endDate.setDate(today.getDate() + 30);
          break;

        default:
          break;
      }

      if (["today", "7days", "30days"].includes(deadlineRange)) {
        query.deadline = {
          $gte: today,
          $lte: endDate,
        };
      }
    }

    // Sorting
    let sort: any = {
      createdAt: -1,
    };

    switch (sortBy) {
      case "deadline":
        sort = {
          deadline: 1,
        };
        break;

      case "title":
        sort = {
          title: 1,
        };
        break;

      case "latest":
      default:
        sort = {
          createdAt: -1,
        };
    }

    const skip = (page - 1) * limit;

    const [opportunities, total] = await Promise.all([
      Opportunity.find(query)
        .select(
          "_id title organization category deadline upvoteCount"
        )
        .sort(sort)
        .skip(skip)
        .limit(limit),

      Opportunity.countDocuments(query),
    ]);

    return {
      opportunities,
      total,
    };
  }
}