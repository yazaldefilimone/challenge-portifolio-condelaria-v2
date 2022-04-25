import styled from 'styled-components';

export const SobreContainer = styled.article`
  width: 100%;
  background-color: var(--dark-color-alt);
`;
export const SobreWrapper = styled.div`
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;
export const SobreData = styled.div`
  width: 20rem;
  height: 390px;
  @media screen and (max-width: 770px) {
    width: 15rem;
    height: 220px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    border-left: 5px solid var(--frist-color);
    object-fit: cover;
  }
`;

export const SobreContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--font-medium);
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;

    p {
      line-height: 1.6;
      color: var(--gray-color);
    }
    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
  }
`;
export const SobreButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;
