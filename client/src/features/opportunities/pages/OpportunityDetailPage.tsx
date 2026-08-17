import { FaArrowLeft, FaFlag } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/OpportunityDetail.css';

const OpportunityDetailPage = () => {
  const navigate = useNavigate();
  const { opportunityId } = useParams();

  const handleUpvote = () => {
    navigate(`/opportunities/${opportunityId}/upvote-confirmation`);
  };

  const handleSave = () => {
    navigate(`/opportunities/${opportunityId}/save-confirmation`);
  };

  const handleAddToGoogleCalendar = () => {
    navigate(`/opportunities/${opportunityId}/calendar-confirmation`);
  };

  const handleReport = () => {
    navigate(`/opportunities/${opportunityId}/report`);
  };

  return (
    <div className="opportunity-detail-page">
      <div className="opportunity-detail-container">
        <header className="opportunity-detail-header">
          <button
            type="button"
            className="opportunity-detail-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <FaArrowLeft />
          </button>

          <h1>Opportunity</h1>

          <button
            type="button"
            className="opportunity-detail-report"
            onClick={handleReport}
            aria-label="Report opportunity"
          >
            <FaFlag />
          </button>
        </header>

        <main className="opportunity-detail-content">
          <span className="opportunity-detail-category">INTERNSHIP</span>

          <h2>Google Summer of Code 2026</h2>

          <p className="opportunity-detail-organization">Google Open Source</p>

          <div className="opportunity-detail-chips">
            <div>
              <span>Deadline</span>
              <strong>Apr 12</strong>
            </div>

            <div>
              <span>Stipend</span>
              <strong>$3000+</strong>
            </div>

            <div>
              <span>Mode</span>
              <strong>Remote</strong>
            </div>
          </div>

          <section className="opportunity-detail-description">
            <h3>Description</h3>

            <p>
              Google Summer of Code is a global program focused on bringing student developers into
              open source software development.
            </p>
          </section>

          <div className="opportunity-detail-actions">
            <div className="opportunity-detail-primary-actions">
              <button type="button" onClick={handleUpvote}>
                Upvote 128
              </button>

              <button type="button" onClick={handleSave}>
                Save
              </button>
            </div>

            <button
              type="button"
              className="opportunity-detail-calendar"
              onClick={handleAddToGoogleCalendar}
            >
              + Add to Google Calendar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OpportunityDetailPage;
