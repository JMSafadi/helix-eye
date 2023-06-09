import { StyledHero } from './styles';
import LOGO_IMAGE from '../../assets/7D6PLq3.png'

export const Hero = () => {
  return (
    <StyledHero>
      <h1>helix eye</h1>
      <picture>
        <source srcSet={LOGO_IMAGE} media="(min-width: 600px)"/>
        <img src={LOGO_IMAGE} alt="helix eye" />
      </picture>
      <p>
        All the knowledge about space in one place
      </p>
    </StyledHero>
  )
}