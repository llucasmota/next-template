import { Container } from '@develop-fapp/ui-kit-fapp';

import { PrincipalSection } from './styles';

export const ScrollSnapeComp: React.FC = () => {
  return (
    <Container container="fluid" flexDirection="column">
      <PrincipalSection>
        <div>
          <section className="section section-1">Section One</section>
          <section className="section section-2">Section Two</section>
          <section className="section section-3">Section Tree</section>
          <section className="section section-4">Section Four</section>
          <section className="section section-5">Section Five</section>
        </div>
      </PrincipalSection>
    </Container>
  );
};
