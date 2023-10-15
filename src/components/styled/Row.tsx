import { styled, XStack } from 'tamagui';

// Example of how to add simple 'styled' variants
export const Row = styled(XStack, {
  name: 'Row',
  variants: {
    accent: {
      true: {
        backgroundColor: '$blue8',
      },
    },
  } as const,
});
