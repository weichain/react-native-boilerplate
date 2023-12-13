import { useEffect } from 'react';
import { useMMKVBoolean } from 'react-native-mmkv';

import { APP_ENV } from '@/constants';

export const useToggleStorybook = () => {
  const [isStorybookDisabled, setIsStorybookDisabled] = useMMKVBoolean('isStorybookDisabled');

  useEffect(() => {
    if (APP_ENV === 'development') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { registerDevMenuItems } = require('expo-dev-menu');
      console.log('HERE');
      const devMenuItems = [
        {
          name: 'Toggle storybook',
          callback: async () => {
            setIsStorybookDisabled((prev) => !prev);
          },
        },
      ];

      registerDevMenuItems(devMenuItems);
    }
  }, []);

  return APP_ENV === 'development' ? { isStorybookEnabled: !isStorybookDisabled } : { isStorybookEnabled: false };
};
