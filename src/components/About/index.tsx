import React, { FunctionComponent } from 'react';
import profil from '../../assets/img/perfil.jpg';

import { ReactComponent as youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as twitch } from '../../assets/icons/twitch.svg';
import { ReactComponent as codepen } from '../../assets/icons/codepen.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Download } from '../../assets/icons/download.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';

import { AboutContainer, AboutContent, AboutData, AboutWrapper, AboutButton } from './styles';
import { Button } from '../Global/Button';

export const About: FunctionComponent = () => {
  const socialMedia = [youtube, twitter, twitch, codepen, facebook];

  return (
    <AboutContainer className="section">
      <AboutWrapper className="container grid">
        <AboutData>
          <img src={profil} alt="porfil" />
        </AboutData>
        <AboutContent>
          <h2>sobre mim</h2>
          <div>
            <h3>Inhambane city, Mocambique</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, necessitatibus? Quod, ad non laboriosam veniam
              atque nihil doloribus corporis veritatis voluptatibus magni esse earum quia nemo sed ea laudantium quisquam.
            </p>
            <div>
              <ul>
                {socialMedia.map((Icon) => (
                  <li>
                    <a href="#">
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <AboutButton>
              <Button border={true}>
                <Download />
                Curriculo
              </Button>
              <Button border={true}>
                <Mail />
                E-mail
              </Button>
            </AboutButton>
          </div>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};
