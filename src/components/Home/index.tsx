import React, { FunctionComponent } from 'react';
import { HomeContainer, HomeContent, HomeWrapper } from './styles';

// import { ReactComponent as Looper } from '../../assets/icons/Looper.svg';
import looper from '../../assets/icons/Looper.svg';
import github from '../../assets/icons/github.svg';
import linkdin from '../../assets/icons/linkedin.svg';
import { Button } from '../Global/Button';

export const Home: FunctionComponent = () => {
  return (
    <HomeContainer id="home" img={looper} className="section">
      <HomeWrapper className="container grid">
        <HomeContent>
          <span>Ola, eu sou</span>
          <h1>Yazalde Filimone</h1>
          <p>desevolvedor FullStack & Ui Designer.</p>
          <div>
            <Button border={true}>
              <img src={github} alt="github" />
              Github
            </Button>
            <Button border={false}>
              <img src={linkdin} alt="linkdin" />
              Linkedin
            </Button>
          </div>
        </HomeContent>
        {/* <HomeData>
          <Looper />
        </HomeData> */}
      </HomeWrapper>
    </HomeContainer>
  );
};
