import * as SecureStore from 'expo-secure-store';

// TODO: Implement react-native-mmkv (from mrousavy). It's not added because it would crash expo GO, but once expo subscription is paid and dev builds are used - it should be added

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
