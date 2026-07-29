import { FaRegBookmark, FaThumbsUp } from 'react-icons/fa';

import type { Opportunity } from '../types/opportunityList.types';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <div className="opportunity-card">
      <div className="opportunity-card-header">
        <span className="category-tag">{opportunity.category}</span>

        <span className="deadline-label">{opportunity.deadline}</span>
      </div>

      <h3 className="opportunity-title">{opportunity.title}</h3>

      <p className="organization-name">{opportunity.organization}</p>

      <div className="opportunity-card-footer">
        <button type="button" className="card-action">
          <FaThumbsUp />
          <span>{opportunity.upvotes}</span>
        </button>

        <button type="button" className="card-action">
          <FaRegBookmark />
          <span>{opportunity.saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
