import React from 'react';
import { Text as TamaguiText, type TextProps } from 'tamagui';

type IProps = TextProps;

export const Text = ({ children, ...rest }: IProps) => {
  return <TamaguiText {...rest}>{children}</TamaguiText>;
};
