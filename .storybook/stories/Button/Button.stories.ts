import { AnimatedButton } from '../../../src/components/button/AnimatedButton';
import { ComponentMeta } from '@storybook/react-native';

const WeichainButton: ComponentMeta<typeof AnimatedButton> = {
  title: 'WeichainButton',
  component: AnimatedButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default WeichainButton;

// Default variant
export const Basic = {};

// Other variant
export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};
