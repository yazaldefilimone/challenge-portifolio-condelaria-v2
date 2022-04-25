import React, { FunctionComponent } from 'react';

import { FooterContainer, FooterWrapper } from './styles';

export const Footer: FunctionComponent = () => {
  return (
    <FooterContainer className="section">
      <FooterWrapper className="container">
        <span>&#169; 2022 Yazalde filimone. All rigths reserved</span>
      </FooterWrapper>
    </FooterContainer>
  );
};
