import { type ApiResponse } from 'apisauce';

import { ErrorMessage } from '@/constants';

import { type UserInfo } from './api.types';
import { api } from '../api.config';

// Note: Example of how to manage/write api services
class UserService {
  async getUserByID(id: number): Promise<UserInfo> {
    const response: ApiResponse<UserInfo> = await api.get(`/users/${id}`);
    if (!response.ok || !response.data) {
      throw new Error(ErrorMessage.USER_GET_BY_ID);
    }

    return response.data;
  }

  async getAll(): Promise<UserInfo[]> {
    const response: ApiResponse<UserInfo[]> = await api.get('/users');

    if (!response.ok || !response.data) {
      throw new Error(ErrorMessage.USER_GET_ALL);
    }

    return response.data;
  }

  async deleteUser(userID: number): Promise<void> {
    const response: ApiResponse<unknown> = await api.delete(`/users/${userID}`);

    if (!response.ok || !response.data) {
      throw new Error(ErrorMessage.USER_DELETE_BY_ID);
    }
  }

  async simulateError(): Promise<void> {
    const response: ApiResponse<unknown> = await api.delete('/error');

    if (!response.ok || !response.data) {
      throw new Error(ErrorMessage.USER_DELETE_BY_ID);
    }
  }
}

export const userService = new UserService();
