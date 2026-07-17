import { Routes, Route, Navigate } from 'react-router-dom';

import CreateAccountPage from './features/auth/pages/CreateAccountPage';
import VerifyCollegeEmailPage from './features/auth/pages/VerifyCollegeEmailPage';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      {/* AUTH-001 */}
      <Route path="/register" element={<CreateAccountPage />} />

      {/* AUTH-002 */}
      <Route path="/verify-email" element={<VerifyCollegeEmailPage />} />

      {/* AUTH-004 */}
      <Route path="/login" element={<LoginPage />} />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}

export default App;
