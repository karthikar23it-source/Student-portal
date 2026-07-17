import { FaGraduationCap } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import VerifyOtpForm from '../components/VerifyOtpForm';

import '../styles/verifyOtp.css';

interface LocationState {
  studentId: string;
  collegeEmail: string;
}

const VerifyCollegeEmailPage = () => {
  const location = useLocation();

  const state = location.state as LocationState | undefined;

  return (
    <main className="verify-page">
      <section className="verify-card">
        <div className="logo-box">
          <FaGraduationCap className="logo-icon" />
        </div>

        <VerifyOtpForm
          studentId={state?.studentId ?? ''}
          collegeEmail={state?.collegeEmail ?? ''}
        />
      </section>
    </main>
  );
};

export default VerifyCollegeEmailPage;