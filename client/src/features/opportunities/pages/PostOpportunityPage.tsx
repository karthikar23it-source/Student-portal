import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import PostOpportunityForm from '../components/PostOpportunityForm';

import '../styles/PostOpportunity.css';

const PostOpportunityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="post-opportunity-page">
      <div className="post-opportunity-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h1>Post Opportunity</h1>

        <p className="subtitle">Share an opportunity with students.</p>

        <PostOpportunityForm />
      </div>
    </div>
  );
};

export default PostOpportunityPage;
