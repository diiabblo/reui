import { ApiResponse, PaginatedResponse } from '@/types/apiResponse';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export const apiClient = {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${API_BASE}${endpoint}`);
    return res.json();
  },

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};
