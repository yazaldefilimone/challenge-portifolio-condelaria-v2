import React, { FunctionComponent } from 'react';

import { ExperienciaContainer, ExperienciaContent, ExperienciaWrapper, ExperienciaNavegation } from './styles';

export const Experiencia: FunctionComponent = () => {
  return (
    <ExperienciaContainer className="section">
      <ExperienciaWrapper className="container grid">
        <ExperienciaNavegation>
          <h2>Experiencia</h2>
          <ul>
            <li>
              <a href="#">Digital House</a>
            </li>
            <li>
              <a href="#">Rocketseat</a>
            </li>
            <li>
              <a href="#">Standerd Bank</a>
            </li>
            <li>
              <a href="#">Itau</a>
            </li>
            <li>
              <a href="#">Nubank</a>
            </li>
          </ul>
        </ExperienciaNavegation>
        <ExperienciaContent>
          <div>
            <h3>Professor conteudista em Front-End</h3>
            <span>Nov 2021 - Actual</span>
          </div>
          <span>Digital House</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero dolor dolore veritatis cum, molestiae corrupti
            omnis totam, blanditiis error voluptates. Eligendi impedit cupiditate debitis earum nesciunt! Rerum, iste amet?
          </p>
        </ExperienciaContent>
      </ExperienciaWrapper>
    </ExperienciaContainer>
  );
};
