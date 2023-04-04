import { LandingCard } from '../LandingCard';
import { StyledHighlitedContent } from './styles';

export const HighlightedContent = () => {
  return (
    <StyledHighlitedContent>
      <h2>Discover the entire observable universe</h2>
      <p className="message">
        With just one search, access all the history and public files collected by NASA
      </p>
      <div className="cards-wrapper">
        <LandingCard data="1k" message="pictures" />
        <LandingCard data="300" message="videos" />
        <LandingCard data="60" message="years of history" />
      </div>
    </StyledHighlitedContent>
  );
};
