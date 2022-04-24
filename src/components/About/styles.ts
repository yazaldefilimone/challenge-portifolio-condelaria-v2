import styled from 'styled-components';

export const AboutContainer = styled.article`
  width: 100%;
  background-color: var(--dark-color-alt);
`;
export const AboutWrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;
export const AboutData = styled.div`
  width: 20rem;
  height: 390px;
  border-left: 4px solid var(--frist-color);
  padding-left: 5px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    object-fit: cover;
  }
`;

export const AboutContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  h2 {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;

    p {
      line-height: 1.6;
    }
    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
  }
`;
export const AboutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;
