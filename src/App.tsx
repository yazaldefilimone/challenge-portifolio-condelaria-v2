import React, { Fragment, FunctionComponent } from 'react';
import { Header } from './components/Header';

import GlobalStyles from './styles/globalStyle';

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <GlobalStyles />
    </Fragment>
  );
};
