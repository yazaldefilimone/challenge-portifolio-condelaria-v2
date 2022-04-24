import React, { Fragment, FunctionComponent } from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Home } from './components/Home';

import GlobalStyles from './styles/globalStyle';

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <GlobalStyles />
    </Fragment>
  );
};
