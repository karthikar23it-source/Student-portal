import { FaFilter, FaPlus, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import OpportunityList from '../components/OpportunityList';

import '../styles/OpportunityList.css';

export default function OpportunityListPage() {
  const navigate = useNavigate();

  const navigateToSearchFilter = () => {
    navigate('/search-filter');
  };

  const navigateToPostOpportunity = () => {
    navigate('/post-opportunity');
  };

  return (
    <div className="opportunity-page">
      <header className="opportunity-header">
        <h1 className="page-title">Opportunities</h1>

        <div className="search-container">
          <button type="button" className="search-bar" onClick={navigateToSearchFilter}>
            <FaSearch className="search-icon" />
            <span className="search-placeholder">Search opportunities...</span>
          </button>

          <button
            type="button"
            className="filter-button"
            onClick={navigateToSearchFilter}
            aria-label="Search and Filter"
          >
            <FaFilter />
          </button>
        </div>
      </header>

      <main className="opportunity-content">
        <OpportunityList search="" />
      </main>

      <button
        type="button"
        className="floating-button"
        onClick={navigateToPostOpportunity}
        aria-label="Post Opportunity"
      >
        <FaPlus />
      </button>
    </div>
  );
}
