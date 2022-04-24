import React, { FunctionComponent } from 'react';

import { Container, Hanburger, HeaderMenu, NavList } from './styles';

export const Header: FunctionComponent = () => {
  const [menu, setMenu] = React.useState(false);
  const links = ['Home', 'Sobre mim', 'Experiencia', 'Projectos'];
  function handlerMenu(event: any) {
    setMenu(!menu);
  }
  return (
    <Container>
      <HeaderMenu className="container">
        <a href="/">Portfolio</a>
        <NavList menu={menu}>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a onClick={handlerMenu} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <span onClick={handlerMenu}>x</span>
        </NavList>
        <Hanburger>
          <button onClick={handlerMenu}>
            <span></span>
          </button>
        </Hanburger>
      </HeaderMenu>
    </Container>
  );
};
