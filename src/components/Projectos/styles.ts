import styled from 'styled-components';

export const ProjectosContainer = styled.article`
  width: 100%;
  background-color: var(--dark-color-alt);
`;
export const ProjectosContent = styled.article`
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 2rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ProjectosWrapper = styled.article``;

export const ProjectosData = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h3 {
    font-size: var(--h3-font-size);
  }
  P {
    font-size: var(--small-font-size);
    line-height: 1.6;
  }
  span {
    color: var(--frist-color);
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 5rem;
    width: max-content;
    border: none;
    background: none;
    color: var(--white-color);
    font-size: var(--normal-font-size);
    padding: 0.5rem 2rem;
    border: 2px solid var(--color);
    border-radius: 0.3rem;
    font-weight: var(--font-semi-bold);
    /* border-image: linear-gradient(45deg, var(--color), var(--color-2)); */
  }
`;
export const ProjectosBG = styled.article`
  width: 100%;
  img {
    border-radius: 0.3rem;
    height: 200px;
    border-left: 8px solid var(--frist-color);

    object-fit: cover;
    width: 100%;
  }
`;
