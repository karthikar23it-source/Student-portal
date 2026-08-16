import { Routes, Route, Navigate } from "react-router-dom";

import CreateAccountPage from "./features/auth/pages/CreateAccountPage";
import VerifyCollegeEmailPage from "./features/auth/pages/VerifyCollegeEmailPage";
import CompleteProfilePage from "./features/auth/pages/CompleteProfilePage";
import LoginPage from "./features/auth/pages/LoginPage";

import NotificationsPage from "./features/notifications/pages/NotificationsPage";
import DeadlineReminderPage from "./features/notifications/pages/DeadlineReminderPage";

import OfficialNotices from "./features/officialNotices/pages/OfficialNotices";
import NoticeDetailPage from "./features/official-notice/pages/NoticeDetailPage";

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

      {/* Notifications */}
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route
        path="/notifications/reminders"
        element={<DeadlineReminderPage />}
      />

      {/* Official Notices */}
      <Route path="/official-notices" element={<OfficialNotices />} />
      <Route
        path="/official-notice/:noticeId"
        element={<NoticeDetailPage />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}

export default App;