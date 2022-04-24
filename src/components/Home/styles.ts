import styled, { StyledProps } from 'styled-components';
interface Props {
  img: string;
}
export const HomeContainer = styled.article`
  width: 100%;
  height: 80vh;
  background-color: var(--dark-color);
  background-image: url(${(props: StyledProps<Props>) => (props.img ? props.img : '')});
  background-position: right;
  background-repeat: no-repeat;
  /* display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`;
export const HomeWrapper = styled.article`
  /* grid-template-columns: 1fr
  place-items: center; */
  padding: 3rem;
  margin-top: 5%;
`;
export const HomeContent = styled.article`
  align-self: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  span,
  h1,
  p {
    text-transform: uppercase;
  }
  span,
  p {
    font-weight: var(--font-semi-bold);
    font-size: var(--h3-font-size);
  }
  h1 {
    color: var(--frist-color);
    font-size: var(--bigest-font-size);
    font-weight: var(--font-bold);
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }
`;
export const HomeData = styled.article`
  display: none;
  svg {
    width: 100%;
  }
`;
// export const HomeContainer = styled.article``;
