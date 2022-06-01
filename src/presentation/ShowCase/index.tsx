import { Container } from '@develop-fapp/ui-kit-fapp';

import { ScrollSnapX } from './components/ScrollSnapX';
import { SectionHero } from './components/SectionHero';

export const ShowCase: React.FC = () => {
  return (
    <Container container="fluid" flexDirection="column">
      <SectionHero />
      <ScrollSnapX />
      <SectionHero />
    </Container>
  );
};
