import { type ApiResponse } from 'apisauce';
import { api } from '../api.config';
import { type UserInfo } from './api.types';

// Note: Example of how to manage/write api services
class UserService {
  async getUserByID(id: number): Promise<UserInfo> {
    const response: ApiResponse<UserInfo> = await api.get(`/users/${id}`);

    if (!response.ok || !response.data) {
      throw new Error('Could not fetch user information.');
    }

    return response.data;
  }

  async getAllUsers(): Promise<UserInfo[]> {
    const response: ApiResponse<UserInfo[]> = await api.get(`/users`);

    if (!response.ok || !response.data) {
      throw new Error('Could not fetch user information list.');
    }

    return response.data;
  }

  async deleteUser(userID: number): Promise<void> {
    const response: ApiResponse<unknown> = await api.delete(`/users/${userID}`);

    if (!response.ok || !response.data) {
      throw new Error('Could not delete user!');
    }
  }

  async simulateError(): Promise<void> {
    const response: ApiResponse<unknown> = await api.delete(`/error`);

    if (!response.ok || !response.data) {
      throw new Error('Could not delete user!');
    }
  }
}

export const userService = new UserService();
