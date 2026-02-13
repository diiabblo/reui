import { createError } from './errorUtils';

export class ApiError extends Error {
  constructor(message: string, public status: number = 500) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: any): never => {
  if (error.response) {
    throw new ApiError(error.response.data.message, error.response.status);
  }
  throw new ApiError(error.message || 'Network error');
};
