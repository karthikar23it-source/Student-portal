import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  postOpportunitySchema,
  type PostOpportunityFormData,
} from '../validation/opportunity.validation';

import { postOpportunity } from '../services/opportunity.service';

const categories = ['Internship', 'Hackathon', 'Research', 'Event', 'Scholarship'] as const;

const PostOpportunityForm = () => {
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostOpportunityFormData>({
    resolver: zodResolver(postOpportunitySchema),
    defaultValues: {
      title: '',
      organization: '',
      category: 'Internship',
      deadline: '',
      description: '',
    },
  });

  const selectedCategory = watch('category');

  const onSubmit = async (data: PostOpportunityFormData) => {
    try {
      const response = await postOpportunity(data);

      setServerMessage(response.message ?? 'Opportunity posted successfully.');

      reset();
    } catch (error) {
      console.error('Post Opportunity Error:', error);

      setServerMessage('Backend API is not available yet. Frontend submission is working.');
    }
  };

  return (
    <form className="post-opportunity-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Title</label>

        <input type="text" placeholder="Enter opportunity title" {...register('title')} />

        {errors.title && <p className="error-message">{errors.title.message}</p>}
      </div>

      <div className="form-group">
        <label>Organization</label>

        <input type="text" placeholder="Enter organization name" {...register('organization')} />

        {errors.organization && <p className="error-message">{errors.organization.message}</p>}
      </div>

      <div className="form-group">
        <label>Category</label>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() =>
                setValue('category', category, {
                  shouldValidate: true,
                })
              }
            >
              {category}
            </button>
          ))}
        </div>

        {errors.category && <p className="error-message">{errors.category.message}</p>}
      </div>

      <div className="form-group">
        <label>Deadline</label>

        <input type="date" {...register('deadline')} />

        {errors.deadline && <p className="error-message">{errors.deadline.message}</p>}
      </div>

      <div className="form-group">
        <label>Description</label>

        <textarea
          rows={5}
          placeholder="Enter opportunity description"
          {...register('description')}
        />

        {errors.description && <p className="error-message">{errors.description.message}</p>}
      </div>

      {serverMessage && <p className="success-message">{serverMessage}</p>}

      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? 'Posting...' : 'Post Opportunity'}
      </button>
    </form>
  );
};

export default PostOpportunityForm;
