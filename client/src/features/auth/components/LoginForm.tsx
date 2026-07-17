import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import axios from 'axios';

import { loginSchema } from '../validation/login.validation';
import { loginStudent } from '../services/login.service';
import type { LoginRequest } from '../types/login.types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await loginStudent(data);

      console.log('Login Successful');
      console.log(response);

      /*
      TODO (AUTH-004)

      Backend will be implemented by another teammate.

      Handle responses:

      - Email not verified
        navigate('/verify-email')

      - Invalid credentials
        Show inline error

      - Success
        Store auth token
        Navigate('/dashboard')
      */
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message ?? 'Login failed. Please try again.');
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

      <div className="login-header">
        <h1>Welcome back</h1>

        <p className="subtitle">Log in to continue to CampusConnect.</p>
      </div>

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
            placeholder="Your password"
            {...register('password')}
          />

          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="register-text">
        New here? <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default LoginForm;
