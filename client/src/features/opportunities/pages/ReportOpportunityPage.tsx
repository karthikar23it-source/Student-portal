import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/OpportunityConfirmation.css';

const ReportOpportunityPage = () => {
  const navigate = useNavigate();
  const { opportunityId } = useParams();

  return (
    <div className="opportunity-confirmation-page">
      <div className="opportunity-confirmation-container">
        <button
          type="button"
          onClick={() => navigate(`/opportunities/${opportunityId}`)}
          aria-label="Go back"
        >
          <FaArrowLeft />
        </button>

        <h1>Report Opportunity</h1>

        <p>Report this opportunity if you believe the information is inappropriate or incorrect.</p>

        <button type="button" onClick={() => navigate(`/opportunities/${opportunityId}`)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReportOpportunityPage;
