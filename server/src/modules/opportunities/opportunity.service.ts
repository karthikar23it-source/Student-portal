import stringSimilarity from "string-similarity";

import { OpportunityRepository } from "./opportunity.repository.js";

import type { CreateOpportunityInput } from "./opportunity.validation.js";

export class OpportunityService {
  private opportunityRepository = new OpportunityRepository();

  async createOpportunity(data: CreateOpportunityInput) {
    // Fetch all active opportunities
    const opportunities =
      await this.opportunityRepository.findAllActiveOpportunities();

    // Combine title + organization for fuzzy comparison
    const newOpportunityText = `${data.title} ${data.organization}`
      .toLowerCase()
      .trim();

    // Similarity threshold
    const SIMILARITY_THRESHOLD = 0.85;

    for (const opportunity of opportunities) {
      const existingOpportunityText =
        `${opportunity.title} ${opportunity.organization}`
          .toLowerCase()
          .trim();

      const similarity = stringSimilarity.compareTwoStrings(
        newOpportunityText,
        existingOpportunityText
      );

      if (similarity >= SIMILARITY_THRESHOLD) {
        throw new Error(
          `DUPLICATE_OPPORTUNITY:${opportunity._id}`
        );
      }
    }

    // Save opportunity
    const createdOpportunity =
      await this.opportunityRepository.createOpportunity({
        postedByStudentId: data.postedByStudentId,

        title: data.title,

        organization: data.organization,

        category: data.category,

        deadline: new Date(data.deadline),

        description: data.description,

        sourceUrl: data.sourceUrl,
      });

    return {
      opportunityId: createdOpportunity._id,
    };
  }

  /**
   * Browse opportunities with pagination
   */
  async browseOpportunities(page: number, limit: number) {
    const { opportunities, total } =
      await this.opportunityRepository.browseOpportunities(page, limit);

    return {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      opportunities: opportunities.map((opportunity) => ({
        opportunityId: opportunity._id,
        title: opportunity.title,
        organization: opportunity.organization,
        category: opportunity.category,
        deadline: opportunity.deadline,
        upvoteCount: opportunity.upvoteCount,
      })),
    };
  }

  /**
   * View opportunity detail
   */
  async viewOpportunityDetail(opportunityId: string) {
    const opportunity =
      await this.opportunityRepository.viewOpportunityDetail(
        opportunityId
      );

    if (!opportunity) {
      throw new Error("OPPORTUNITY_NOT_FOUND");
    }

    return {
      opportunityId: opportunity._id,
      postedByStudentId: opportunity.postedByStudentId,
      title: opportunity.title,
      organization: opportunity.organization,
      category: opportunity.category,
      deadline: opportunity.deadline,
      description: opportunity.description,
      sourceUrl: opportunity.sourceUrl,
      upvoteCount: opportunity.upvoteCount,
      isArchived: opportunity.isArchived,
      createdAt: opportunity.createdAt,
      updatedAt: opportunity.updatedAt,

      // Placeholder values until Upvote and Save modules are implemented
      isUpvotedByCurrentStudent: false,
      isSavedByCurrentStudent: false,
    };
  }
}