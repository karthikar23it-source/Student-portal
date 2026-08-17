import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/OpportunityConfirmation.css';

const UpvoteConfirmationPage = () => {
  const navigate = useNavigate();
  const { opportunityId } = useParams();

  return (
    <div className="opportunity-confirmation-page">
      <div className="opportunity-confirmation-container">
        <FaCheckCircle className="opportunity-confirmation-icon" aria-hidden="true" />

        <h1>Upvoted!</h1>

        <p>You have successfully upvoted this opportunity.</p>

        <button type="button" onClick={() => navigate(`/opportunities/${opportunityId}`)}>
          Back to Opportunity
        </button>
      </div>
    </div>
  );
};

export default UpvoteConfirmationPage;
