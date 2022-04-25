import React, { Fragment, FunctionComponent } from 'react';
import { Sobre } from './components/Sobre';
import { Header } from './components/Header';
import { Home } from './components/Home';

import GlobalStyles from './styles/globalStyle';
import { Experiencia } from './components/Experiencia';
import { Projectos } from './components/Projectos';
import { Footer } from './components/Footer';

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Experiencia />
        <Projectos />
      </main>
      <Footer />
      <GlobalStyles />
    </Fragment>
  );
};
