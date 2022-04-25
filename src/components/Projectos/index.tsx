import React, { FunctionComponent } from 'react';
import web2 from '../../assets/img/web2.jpeg';
import web3 from '../../assets/img/web3.png';
import web4 from '../../assets/img/web4.png';
import web5 from '../../assets/img/web5.png';
import web from '../../assets/img/web6.webp';
import web7 from '../../assets/img/web7.png';
import { ReactComponent as Link } from '../../assets/icons/link.svg';
import { ProjectosContainer, ProjectosWrapper, ProjectosContent, ProjectosData, ProjectosBG } from './styles';
const projects = [
  {
    name: 'Otrylvs',
    img: web5,

    link: 'Dez 2017 - Passado',
    tech: 'Clean Arquitecture TDD ReactJs Styled-Components TypeScript',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero dolor dolore veritatis cum, molestiae corruptiomnis totam, blanditiis error voluptates. Eligendi impedit cupiditate debitis earum nesciunt! Rerum, iste amet?',
  },
  {
    name: 'Proper-t',
    tech: 'NextJs Sass',
    img: web4,

    link: 'Nubank Developer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero dolor dolore veritatis cum, molestiae corruptiomnis totam, blanditiis error voluptates. Eligendi impedit cupiditate debitis earum nesciunt! Rerum, iste amet?',
  },
  {
    name: 'Clone Facebook Api',
    link: 'Fullstack Developer',
    img: web2,
    tech: 'Clean Arquitecture TDD Nodejs TypeScript',
    desc: 'clone da rede social Facebook, uma Api rest feita pra espandir meu conhecimento e mostar aos RH que sou qualificado pra a empresa. Feita usando Clean Arquitecture Test Drive Developement ',
  },
  {
    name: 'AB-Studios',
    img: web,

    tech: 'NextJs Styled-components TypeScript',
    link: 'Nubank Developer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero dolor dolore veritatis cum, molestiae corruptiomnis totam, blanditiis error voluptates. Eligendi impedit cupiditate debitis earum nesciunt! Rerum, iste amet?',
  },
];
export const Projectos: FunctionComponent = () => {
  return (
    <ProjectosContainer id="projectos" className="section">
      <ProjectosWrapper className="container">
        <h2>Projectos</h2>
        <ProjectosContent className="container grid">
          {projects.map((project) => (
            <div>
              <ProjectosBG>
                <img src={project.img} alt="" />
              </ProjectosBG>
              <ProjectosData>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <span>{project.tech}</span>
                <a href={project.link}>
                  <Link />
                  Visualizar
                </a>
              </ProjectosData>
            </div>
          ))}
        </ProjectosContent>
      </ProjectosWrapper>
    </ProjectosContainer>
  );
};
