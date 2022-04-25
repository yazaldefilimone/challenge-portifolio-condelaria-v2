import React, { FunctionComponent } from 'react';
import profil from '../../assets/img/perfil.jpg';

import { ReactComponent as youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as twitch } from '../../assets/icons/twitch.svg';
import { ReactComponent as codepen } from '../../assets/icons/codepen.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Download } from '../../assets/icons/download.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';

import { SobreContainer, SobreContent, SobreData, SobreWrapper, SobreButton } from './styles';
import { Button } from '../Global/Button';

export const Sobre: FunctionComponent = () => {
  const socialMedia = [youtube, twitter, twitch, codepen, facebook];

  return (
    <SobreContainer className="section" id="sobre%20mim">
      <SobreWrapper className="container grid">
        <SobreData>
          <img src={profil} alt="porfil" />
        </SobreData>
        <SobreContent>
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
            <SobreButton>
              <Button border={false}>
                <Download />
                Curriculo
              </Button>
              <Button border={true}>
                <Mail />
                Email
              </Button>
            </SobreButton>
          </div>
        </SobreContent>
      </SobreWrapper>
    </SobreContainer>
  );
};
