import { useState } from 'react';
import axios from 'axios';

import OtpInput from './OtpInput';

import { verifyOtp, resendOtp } from '../services/verifyOtp.service';

interface VerifyOtpFormProps {
  studentId: string;
  collegeEmail: string;
}

const VerifyOtpForm = ({ studentId, collegeEmail }: VerifyOtpFormProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [highlightResend, setHighlightResend] = useState(false);

  const otpCode = otp.join('');

  const handleVerifyOtp = async () => {
    if (otpCode.length !== 6) return;

    try {
      setLoading(true);
      setError('');
      setHighlightResend(false);

      await verifyOtp({
        studentId,
        otpCode,
      });

      /*
      TODO (AUTH-003)

      navigate("/complete-profile")
      */

      console.log('OTP Verified');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const backendError = err.response?.data?.error;

        if (backendError === 'OTP_EXPIRED') {
          setError('OTP expired, please resend.');
          setHighlightResend(true);
        } else if (backendError === 'OTP_INVALID') {
          setError('Incorrect OTP. Try again.');
          setOtp(Array(6).fill(''));
        } else {
          setError('Verification failed.');
        }
      } else {
        setError('Something went wrong.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp({
        studentId,
      });

      setOtp(Array(6).fill(''));

      setError('');

      setHighlightResend(false);

      alert('OTP sent successfully.');
    } catch {
      alert('Unable to resend OTP.');
    }
  };

  return (
    <>
      <h1>Verify College Email</h1>

      <p className="subtitle">Enter the 6-digit OTP sent to</p>

      <p className="email-text">{collegeEmail}</p>

      <OtpInput value={otp} onChange={setOtp} />

      {error && <p className="otp-error">{error}</p>}

      <button onClick={handleVerifyOtp} disabled={loading || otpCode.length !== 6}>
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>

      <button
        type="button"
        className={highlightResend ? 'resend-btn active' : 'resend-btn'}
        onClick={handleResendOtp}
      >
        Resend OTP
      </button>
    </>
  );
};

export default VerifyOtpForm;