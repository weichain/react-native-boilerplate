import React from 'react';
import { Text as TamaguiText, type TextProps } from 'tamagui';

interface IProps extends TextProps {}

export const Text = ({ children, ...rest }: IProps) => {
  return <TamaguiText {...rest}>{children}</TamaguiText>;
};
