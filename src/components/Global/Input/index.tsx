import React, { FunctionComponent } from 'react';

// import { Container } from './styles';
interface InputProps {
  children?: React.ReactNode;
  border: boolean;
  name: string;
  type: string;
}
export const Input: FunctionComponent<InputProps> = ({ name, type }) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <input name={name} id={name} type={type} />
    </div>
  );
};
