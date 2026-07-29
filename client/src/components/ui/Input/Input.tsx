import { FaThumbsUp, FaRegBookmark } from 'react-icons/fa';
import { Opportunity } from '../types/opportunity.types';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard = ({ opportunity }: OpportunityCardProps) => {
  return (
    <div className="opportunity-card">
      <div className="card-header">
        <span className="category-tag">{opportunity.category}</span>

        <span className="deadline">{opportunity.deadline}</span>
      </div>

      <h3 className="opportunity-title">{opportunity.title}</h3>

      <p className="organization">{opportunity.organization}</p>

      <div className="card-footer">
        <div className="upvotes">
          <FaThumbsUp />
          <span>{opportunity.upvotes}</span>
        </div>

        <div className="save">
          <FaRegBookmark />
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
