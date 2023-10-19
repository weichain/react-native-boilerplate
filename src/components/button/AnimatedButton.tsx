import React from 'react';
import { Button, type ButtonProps } from 'tamagui';

interface IProps extends ButtonProps {
  text: string;
}

export const AnimatedButton = ({ text, ...rest }: IProps) => {
  return (
    <Button bg="$blue10" mt="$4" pressStyle={{ bg: '$blue9', scale: 1.2 }} color={'$blue2'} animation={'bouncy'} {...rest}>
      {text}
    </Button>
  );
};
