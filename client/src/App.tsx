import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './features/dashboard/pages/Dashboard';

import CreateAccountPage from './features/auth/pages/CreateAccountPage';
import VerifyCollegeEmailPage from './features/auth/pages/VerifyCollegeEmailPage';
import CompleteProfilePage from './features/auth/pages/CompleteProfilePage';
import LoginPage from './features/auth/pages/LoginPage';

import OfficialNotices from './features/officialNotices/pages/OfficialNotices';

import PostOpportunityPage from './features/opportunities/pages/PostOpportunityPage';
import OpportunityDetailPage from './features/opportunities/pages/OpportunityDetailPage';
import UpvoteConfirmationPage from './features/opportunities/pages/UpvoteConfirmationPage';
import SaveConfirmationPage from './features/opportunities/pages/SaveConfirmationPage';
import CalendarConfirmationPage from './features/opportunities/pages/CalendarConfirmationPage';
import ReportOpportunityPage from './features/opportunities/pages/ReportOpportunityPage';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Authentication */}
      <Route path="/register" element={<CreateAccountPage />} />
      <Route path="/verify-email" element={<VerifyCollegeEmailPage />} />
      <Route path="/complete-profile" element={<CompleteProfilePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Official Notices */}
      <Route path="/official-notices" element={<OfficialNotices />} />

      {/* Post Opportunity */}
      <Route path="/post-opportunity" element={<PostOpportunityPage />} />

      {/* Opportunity Detail */}
      <Route path="/opportunities/:opportunityId" element={<OpportunityDetailPage />} />

      {/* Upvote Confirmation */}
      <Route
        path="/opportunities/:opportunityId/upvote-confirmation"
        element={<UpvoteConfirmationPage />}
      />

      {/* Save Confirmation */}
      <Route
        path="/opportunities/:opportunityId/save-confirmation"
        element={<SaveConfirmationPage />}
      />

      {/* Calendar Confirmation */}
      <Route
        path="/opportunities/:opportunityId/calendar-confirmation"
        element={<CalendarConfirmationPage />}
      />

      {/* Report Opportunity */}
      <Route path="/opportunities/:opportunityId/report" element={<ReportOpportunityPage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
