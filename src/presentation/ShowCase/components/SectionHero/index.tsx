import { Container, Text } from '@develop-fapp/ui-kit-fapp';

export const SectionHero: React.FC = () => {
  return (
    <Container
      container="lg"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      style={{ padding: '50px 20px', maxWidth: '600px', margin: '0 auto' }}
    >
      <Container
        container="fluid"
        backgroundColor="#b5b0b058"
        alignItems="center"
        justifyContent="center"
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '15px',
          margin: '0 auto',
        }}
      >
        <Text weight="semibold" variant="h4">
          {1}
        </Text>
      </Container>
    </Container>
  );
};
