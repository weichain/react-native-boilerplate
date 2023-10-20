import { ComponentMeta } from '@storybook/react-native';
import { Text } from '../../../src/components/text/Text';

const WeichainText: ComponentMeta<typeof Text> = {
  title: 'WeichainText',
  component: Text,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    children: 'Hello world',
  },
};

export default WeichainText;

export const SimpleExample = {
  args: {
    children: 'This is a default styled text',
  },
};
