import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/OpportunityConfirmation.css';

const SaveConfirmationPage = () => {
  const navigate = useNavigate();
  const { opportunityId } = useParams();

  return (
    <div className="opportunity-confirmation-page">
      <div className="opportunity-confirmation-container">
        <FaCheckCircle className="opportunity-confirmation-icon" aria-hidden="true" />

        <h1>Saved!</h1>

        <p>This opportunity has been saved to your list.</p>

        <button type="button" onClick={() => navigate(`/opportunities/${opportunityId}`)}>
          Back to Opportunity
        </button>
      </div>
    </div>
  );
};

export default SaveConfirmationPage;
