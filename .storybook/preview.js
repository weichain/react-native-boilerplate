import { TamaguiProvider } from 'tamagui';
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
      <Story />
    </TamaguiProvider>
  ),
];
