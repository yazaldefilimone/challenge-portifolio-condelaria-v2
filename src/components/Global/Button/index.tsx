import React, { FunctionComponent } from 'react';

import { Container } from './styles';
interface ButtonProps {
  children?: React.ReactNode;
  border: boolean;
}
export const Button: FunctionComponent<ButtonProps> = ({ children, border }) => {
  return <Container border={border}>{children}</Container>;
};
