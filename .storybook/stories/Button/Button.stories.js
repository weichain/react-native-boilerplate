import { AnimatedButton } from '../../../src/components/button/AnimatedButton';
import React from 'react';
import { View } from 'react-native';

const MyButtonMeta = {
  title: 'AnimatedButton',
  component: AnimatedButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

// Default variant
export const Basic = {};

// Other variant
export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};
