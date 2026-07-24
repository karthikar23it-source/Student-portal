import { Routes, Route, Navigate } from 'react-router-dom';

import CreateAccountPage from './features/auth/pages/CreateAccountPage';
import VerifyCollegeEmailPage from './features/auth/pages/VerifyCollegeEmailPage';
import CompleteProfilePage from './features/auth/pages/CompleteProfilePage';
import LoginPage from './features/auth/pages/LoginPage';

import OfficialNotices from './features/officialNotices/pages/OfficialNotices';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      {/* Authentication */}
      <Route path="/register" element={<CreateAccountPage />} />
      <Route path="/verify-email" element={<VerifyCollegeEmailPage />} />
      <Route path="/complete-profile" element={<CompleteProfilePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Sprint 3 */}
      <Route path="/official-notices" element={<OfficialNotices />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}

export default App;
