import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import axios from 'axios';

import { registerSchema } from '../validation/auth.validation';
import { registerStudent } from '../services/auth.service';
import type { RegisterStudentRequest } from '../types/auth.types';

const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterStudentRequest>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterStudentRequest) => {
    try {
      const response = await registerStudent(data);

      console.log('Registration Successful');
      console.log(response);

      reset();

      /*
      TODO (AUTH-002)

      When Verify College Email screen is completed,
      replace this section with:

      navigate("/verify-email", {
        state: {
          studentId: response.data.studentId,
          collegeEmail: data.collegeEmail,
        },
      });
      */
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message ?? 'Registration failed. Please try again.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="logo-box">
        <FaGraduationCap className="logo-icon" />
      </div>

      <h1>Create your account</h1>

      <p className="subtitle">Join your campus community on CampusConnect.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="collegeEmail">College Email</label>

          <input
            id="collegeEmail"
            type="email"
            placeholder="you@college.edu"
            {...register('collegeEmail')}
          />

          {errors.collegeEmail && (
            <span className="error-message">{errors.collegeEmail.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            {...register('password')}
          />

          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            {...register('confirmPassword')}
          />

          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword.message}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Account'}
        </button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </>
  );
};

export default CreateAccountForm;
