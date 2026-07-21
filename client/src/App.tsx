import { Routes, Route, Navigate } from 'react-router-dom';

import CreateAccountPage from './features/auth/pages/CreateAccountPage';
import VerifyCollegeEmailPage from './features/auth/pages/VerifyCollegeEmailPage';
import LoginPage from './features/auth/pages/LoginPage';
import CompleteProfilePage from './features/auth/pages/CompleteProfilePage';
import NoticeDetailPage from './features/official-notice/pages/NoticeDetailPage';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      {/* AUTH-001 */}
      <Route path="/register" element={<CreateAccountPage />} />

      {/* AUTH-002 */}
      <Route path="/verify-email" element={<VerifyCollegeEmailPage />} />

      {/* AUTH-003 */}
      <Route path="/complete-profile" element={<CompleteProfilePage />} />

      {/* AUTH-004 */}
      <Route path="/login" element={<LoginPage />} />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/register" replace />} />

      <Route path="/official-notice/:noticeId" element={<NoticeDetailPage />}
/>
    </Routes>
  );
}

export default App;
