import { create } from 'apisauce';

import { API_URL } from '@/constants/env';

export const api = create({
  baseURL: API_URL ?? 'http://localhost:3000',
});
