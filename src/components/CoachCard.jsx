import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoachCard = ({ title, subtitle, description, imageUrl }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="Coach" />
      </ImageContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <DescriptionSection>
        <Description>{description}</Description>
      </DescriptionSection>     
    </CardContainer>
  );
};

CoachCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CoachCard;

const CardContainer = styled.div`
  border-radius: 32px;
  padding-bottom: 64px;
  padding-top: 64px;
  border: none;  
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 272px;

  @media (min-width: 768px) { /* Tablet */
    width: 376px;
  }
`;

const Image = styled.img`
  width: 240px;
  height: 272px;
  object-fit: cover; /* Ensures the image covers the entire container */
  border-radius: 16px;

  @media (min-width: 768px) { /* Tablet */
    width: 376px;
  }
`;

const Title = styled.h2`
  padding-top: 20px;
  font-family: Fira Sans, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: rgba(8, 61, 86, 1);
  line-height: 32px;
  text-align: left;
  display: block;
  position: relative;
  white-space: pre-wrap;

  @media (min-width: 768px) { /* Tablet */
    padding-top: 30px;
    font-size: 26px;
    font-weight: 500;
    line-height: 40px;
  }
  @media (min-width: 1200px) { /* Tablet */
  padding-top: 28px;
  font-size: 28px;
  line-height: 48px;
}
`;

const Subtitle = styled.h3`
  font-family: Fira Sans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(8, 61, 86, 1);
  line-height: 20px;
  text-align: left;
  display: block;
  position: relative;
  white-space: pre-wrap;
  margin-bottom: 10px;
  padding-top: 10px;

  @media (min-width: 768px) { /* Tablet */
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1200px) { /* Tablet */
  padding-top: 2px;
  font-size: 24px;
  line-height: 32px;
}
`;

const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(8, 61, 86, 1);
  line-height: 24px;
  text-align: left;
  display: block;
  letter-spacing: -0.41px;
  width: 224px;
  position: relative;

  @media (min-width: 768px) { /* Tablet */
    font-size: 18px;
    line-height: 40px;
    letter-spacing: -0.57px;
    width: 334px;
  }
  @media (min-width: 1200px) { /* Tablet */
  padding-top: 2px;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: -0.65px;
  width: 309px;

`;

const DescriptionSection = styled.div`
  border-left: 4px solid rgba(8, 61, 86, 1); 
  padding-left: 16px; /* Add some padding for better appearance */
`;
