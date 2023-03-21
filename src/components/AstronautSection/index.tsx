import React from 'react';
import { StyledAstronaut } from './styles';
import ASTRONAUT_IMAGE from '../../assets/tBkWIfP.png'

export const AstronautSection = () => {
  return (
    <StyledAstronaut>
      <div className="background" />
      <div className="picture">
        <img src={ASTRONAUT_IMAGE} alt="astronaut ilustration" />
      </div>
    </StyledAstronaut>
  )
}