import * as SecureStore from 'expo-secure-store';

import { storage } from '@/config';

export const getSecureString = async (key: string) => await SecureStore.getItemAsync(key);

export const setSecureString = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureObject = async <T>(key: string): Promise<T | null> => {
  const value = await getSecureString(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (err) {
    return null;
  }
};

export const setSecureObject = async <T>(key: string, value: T) => {
  const stringifiedObject = JSON.stringify(value);
  await setSecureString(key, stringifiedObject);
};

export const removeSecureItem = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};

export const setStorageItem = (key: string, value: string | number | boolean) => {
  storage.set(key, value);
};
