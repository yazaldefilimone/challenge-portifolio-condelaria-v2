/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FunctionComponent } from 'react';

import { ExperienciaContainer, ExperienciaContent, ExperienciaWrapper, ExperienciaNavegation } from './styles';
import { data } from '../../api/fake/db';

export const Experiencia: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [experienciaCompanies, setExperienciaCompanies] = React.useState(data);
  const [indexActive, setIndexActive] = React.useState(1);
  const [experienciaDescription, setExperienciaDescription] = React.useState(experienciaCompanies[indexActive - 1]);

  function handlerClick({ target }: any) {
    let id: number = Number(target.id);
    setIndexActive(id + 1);
    setExperienciaDescription(experienciaCompanies[id]);
  }

  return (
    <ExperienciaContainer className="section">
      <ExperienciaWrapper className="container grid">
        <ExperienciaNavegation active={indexActive}>
          <h2>Experiencia</h2>
          <ul>
            {experienciaCompanies.map((item, index) => (
              <li>
                <a onClick={handlerClick} id={`${index}`}>
                  {item.company}
                </a>
              </li>
            ))}
          </ul>
        </ExperienciaNavegation>
        <ExperienciaContent>
          <div>
            <h3>{experienciaDescription.prof}</h3>
            <span>{experienciaDescription.time}</span>
          </div>
          <span>{experienciaDescription.set}</span>
          <p>{experienciaDescription.desc}</p>
        </ExperienciaContent>
      </ExperienciaWrapper>
    </ExperienciaContainer>
  );
};
