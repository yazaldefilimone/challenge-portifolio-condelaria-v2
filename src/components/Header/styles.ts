import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: var(--dark-color);
`;
export const HeaderMenu = styled.div`
  position: relative;
  /* overflow-x: hidden; */
  height: calc(var(--header-height) + 1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    display: inline-block;
    padding: 0.5rem 1rem;
    /* background: red; */
    font-weight: var(--font-medium);

    border-radius: 0.5rem;
    color: var(--frist-color);
    text-transform: capitalize;
    font-size: var(--h2-font-size);
  }
`;
export const NavList: any = styled.div`
  transition: 0.3s;
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      display: block;
      padding: 0.5rem 1rem;
      width: max-content;
      color: var(--gray-color);
      transition: 0.5s ease-in-out linear;
      /* text-transform: capitalize; */
      font-weight: var(--font-medium);
      border-radius: 0.5rem;
      position: relative;
      &::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        transition: 0.4s;
        background: var(--frist-color);
        margin-top: 2px;
        border-radius: 1px;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  > span {
    display: none;
  }
  @media screen and (max-width: 770px) {
    box-shadow: -1px 0px 2px var(--dark-color);
    z-index: 10;
    right: ${(props: any) => (props.menu ? '0px' : '-100%')};
    top: 0px;
    position: fixed;
    height: 100vh;
    width: 70%;
    background: rgba(0, 0, 0, 0.1);
    /* display: flex;
    justify-content: center; */
    background: var(--second-color);

    ul {
      /* margin-top: 5rem; */
      padding: 4rem;
      display: block;
      li {
        margin-bottom: 2rem;
      }
      a {
        text-transform: uppercase;
        /* color: var(--frist-color); */
      }
    }
    > span {
      cursor: pointer;
      top: 1rem;
      right: 2rem;
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: var(--h1-font-size);
      height: 2rem;
      background: var(--gray-color);
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      font-size: var(--h1-font-size);
      color: var(--dark-color);
      font-weight: var(--font-semi-bold);
    }
  }
`;
export const Hanburger = styled.div`
  display: none;
  button {
    background: none;
    border: none;
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--white-color);
    span {
      display: block;
      width: 20px;
      border-top: 2px solid var(--white-color);
      &::before,
      &::after {
        display: block;
        content: '';
        width: 20px;
        height: 2px;
        background: var(--white-color);
        margin-top: 4px;
      }
    }
  }

  @media screen and (max-width: 770px) {
    display: block;
  }
`;
