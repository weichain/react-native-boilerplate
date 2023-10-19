import { useEffect } from 'react';
import { useMMKVBoolean } from 'react-native-mmkv';

const appEnv = process.env.NODE_ENV;

export const useToggleStorybook = () => {
  const [isStorybookEnabled, setIsStorybookEnabled] = useMMKVBoolean('isStorybookEnabled');

  useEffect(() => {
    if (appEnv === 'development') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { registerDevMenuItems } = require('expo-dev-menu');

      const devMenuItems = [
        {
          name: 'Toggle storybook',
          callback: async () => {
            setIsStorybookEnabled((prev) => !prev);
          },
        },
      ];

      registerDevMenuItems(devMenuItems);
    }
  }, []);

  return appEnv === 'development' ? { isStorybookEnabled } : { isStorybookEnabled: false };
};
