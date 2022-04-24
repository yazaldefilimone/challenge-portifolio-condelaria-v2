import styled from 'styled-components';

export const ExperienciaContainer = styled.article`
  width: 100%;
  background-color: var(--dark-color);
`;
export const ExperienciaWrapper = styled.div`
  grid-template-columns: 1fr 2fr;
  place-items: center;
`;
export const ExperienciaNavegation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--font-medium);
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    a {
      color: var(--gray-color);
      min-width: 175px;
      padding: 0.8rem 2rem;
      display: inline-block;
    }
    li:nth-child(4) {
      a {
        color: var(--white-color);
        background: var(--dark-color-alt);
        border-left: 1px solid var(--frist-color);
      }
    }
  }
`;

export const ExperienciaContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    gap: 4rem;
    align-items: center;
    > span {
      font-size: var(--small-font-size);
    }
  }
  > span {
    color: var(--frist-color);
    font-weight: var(--font-semi-bold);
  }
  p {
    color: var(--gray-color);
    line-height: 1.6;
  }
`;
