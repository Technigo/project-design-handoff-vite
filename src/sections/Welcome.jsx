import styled from 'styled-components';

const WelcomeContainer = styled.div`
  padding: 40px 24px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const HighlightText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 30px;
  }
`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Title>Välkommen till Kindness & Compassion</Title>
      <Paragraph>
        Kindness & Compassion är en rörelse med visionen att skapa ett vänligare samhälle.
      </Paragraph>
      <Paragraph>
        Vi skapar mötesplatser och inspirerar till goda handlingar.
      </Paragraph>
      <Paragraph>
        Vårt mål är att bygga broar mellan människor och sprida vänlighet. Genom samtalsgrupper och enkla vardagliga handlingar kan vi göra skillnad.
      </Paragraph>
      <Paragraph>
        Ingen kan göra allt, men alla kan göra något. Tillsammans skapar vi en mer inkluderande värld.
      </Paragraph>
      <HighlightText>Var med och gör skillnad</HighlightText>
    </WelcomeContainer>
  );
};

export default Welcome;
