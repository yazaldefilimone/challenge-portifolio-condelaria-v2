import React, { Children, FunctionComponent } from 'react';

import { Container } from './styles';
interface ButtonProps {
  children?: React.ReactNode;
  border: boolean;
}
export const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
