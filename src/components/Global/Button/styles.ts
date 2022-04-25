import styled, { StyledProps } from 'styled-components';
interface ContainerProps {
  border: boolean;
}
export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 5rem;
  border: none;
  background: none;
  color: var(--white-color);
  font-size: var(--normal-font-size);
  padding: 0.5rem 2rem;
  border: 2px solid red;
  border-radius: 0.4rem;
  font-weight: var(--font-semi-bold);
  border-image: ${(props: StyledProps<ContainerProps>) => (props.border ? 'var(--gradient-pink) ' : ' var(--gradient-purple) ')};
`;
