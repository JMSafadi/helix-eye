import React from 'react';
import { Link } from 'react-router-dom';
import { StyledConversionSection } from './styles';
import SPACESHIP_IMAGE from '../../assets/dBwEHOn.png'

export const ConversionSection = () => {
  return (
    <StyledConversionSection>
      <img
        className="picture"
        src={SPACESHIP_IMAGE}
        alt="Una nave espacial"
      />
      <h2 className="title">
        Explore the space never was so easy!
      </h2>
      <Link className="link" to='/galaxies'>Starts now</Link>
    </StyledConversionSection>
  );
};
