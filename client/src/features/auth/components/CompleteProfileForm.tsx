import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { completeProfileSchema } from '../validation/completeProfile.validation';
import { completeProfile } from '../services/completeProfile.service';

import type {
  CompleteProfileFormData,
  CompleteProfileRequest,
} from '../types/completeProfile.types';

interface LocationState {
  studentId: string;
  collegeEmail: string;
}

const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { studentId } = (location.state || {}) as LocationState;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CompleteProfileFormData>({
    resolver: zodResolver(completeProfileSchema),
  });

  const onSubmit = async (data: CompleteProfileFormData) => {
    try {
      const payload: CompleteProfileRequest = {
        studentId,
        ...data,
      };

      const response = await completeProfile(payload);

      console.log(response);

      alert('Profile completed successfully.');

      navigate('/login');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message ?? 'Profile completion failed.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="profile-header">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <h1>Complete Profile</h1>
      </div>

      <p className="subtitle">Just a few details to set up your profile</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>

          <input
            id="fullName"
            type="text"
            placeholder="Aarav Sharma"
            {...register('fullName')}
          />

          {errors.fullName && (
            <span className="error-message">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>

          <input
            id="rollNumber"
            type="text"
            placeholder="23IT012"
            {...register('rollNumber')}
          />

          {errors.rollNumber && (
            <span className="error-message">
              {errors.rollNumber.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>

          <select
            id="department"
            defaultValue=""
            {...register('department')}
          >
            <option value="">Select Department</option>

            <option value="Artificial Intelligence & Data Science">
              Artificial Intelligence & Data Science
            </option>

            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>

            <option value="Civil Engineering">
              Civil Engineering
            </option>

            <option value="Computer Science & Engineering">
              Computer Science & Engineering
            </option>

            <option value="Electronics & Communication Engineering">
              Electronics & Communication Engineering
            </option>

            <option value="Electrical & Electronics Engineering">
              Electrical & Electronics Engineering
            </option>

            <option value="Information Technology">
              Information Technology
            </option>

            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
          </select>

          {errors.department && (
            <span className="error-message">
              {errors.department.message}
            </span>
          )}
        </div>

        <div className="profile-row">
          <div className="form-group half-width">
            <label htmlFor="year">Year</label>

            <select
              id="year"
              defaultValue=""
              {...register('year')}
            >
              <option value="">Select Year</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>

            {errors.year && (
              <span className="error-message">
                {errors.year.message}
              </span>
            )}
          </div>

          <div className="form-group half-width">
            <label htmlFor="section">Section</label>

            <select
              id="section"
              defaultValue=""
              {...register('section')}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>

            {errors.section && (
              <span className="error-message">
                {errors.section.message}
              </span>
            )}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Complete Profile'}
        </button>
      </form>
    </>
  );
};

export default CompleteProfileForm;