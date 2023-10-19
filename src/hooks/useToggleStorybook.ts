import { useEffect } from 'react';
import { useMMKVBoolean } from 'react-native-mmkv';

import { APP_ENV } from '@/constants';

export const useToggleStorybook = () => {
  const [isStorybookEnabled, setIsStorybookEnabled] = useMMKVBoolean('isStorybookEnabled');

  useEffect(() => {
    if (APP_ENV === 'development') {
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

  return APP_ENV === 'development' ? { isStorybookEnabled } : { isStorybookEnabled: false };
};
