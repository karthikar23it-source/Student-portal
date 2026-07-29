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
}