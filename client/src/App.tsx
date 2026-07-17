import { Routes, Route, Navigate } from 'react-router-dom';

import CreateAccountPage from './features/auth/pages/CreateAccountPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />

      <Route path="/register" element={<CreateAccountPage />} />

      {/* TODO (AUTH-002)
      <Route
        path="/verify-email"
        element={<VerifyCollegeEmailPage />}
      />
      */}

      {/* TODO (AUTH-004)
      <Route
        path="/login"
        element={<LoginPage />}
      />
      */}
    </Routes>
  );
}

export default App;
