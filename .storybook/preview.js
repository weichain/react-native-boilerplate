import { TamaguiProvider, View } from 'tamagui';

import config from '../tamagui.config';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <TamaguiProvider config={config}>
      <View flex={1} alignItems="center" justifyContent="center">
        <Story />
      </View>
    </TamaguiProvider>
  ),
];
