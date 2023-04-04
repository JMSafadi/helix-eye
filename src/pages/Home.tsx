import { Hero } from '../components/Hero';
import { AstronautSection } from '../components/AstronautSection';
import { HighlightedContent } from '../components/HighlightedContent';
import { ConversionSection } from '../components/ConversionSection';

export const Home = () => (
  <main>
    <Hero />
    <AstronautSection />
    <HighlightedContent />
    <ConversionSection />
  </main>
)