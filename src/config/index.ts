import { QueryClient } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

export const queryClient = new QueryClient();
export const storage = new MMKV();
