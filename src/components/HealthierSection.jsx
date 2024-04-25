import styled from 'styled-components'; // Importing styled-components for styling
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking props

const HealthierSection = () => {
  return (
    <>
      {/* Styled section for healthier section */}
      <StyledSection>
        {/* Flex container for text */}
        <FlexContainer>
          {/* Text for healthier section */}
          <Text>
            Your path to a healthier lifestyle starts here! Take your first step to feeling inner balance and peace.
          </Text>
        </FlexContainer>
        {/* Button for healthier section */}
        <Button>Continue to Book &#8594;</Button>
      </StyledSection>
    </>
  );
};

// Styled-components styles
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px 32px 32px 32px;
  position: relative;
  gap: 32px;
  width: 390px;

  @media (min-width: 768px) { /* Tablet */
    padding: 64px 64px 64px 64px;
  }
  @media (min-width: 1200px) { /* desktop */
    padding: 64px 0px 64px 0px;
  }
`;

const Text = styled.p`
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 600;
  color: rgba(8, 61, 86, 1);
  line-height: 32px;
  text-align: left;
  display: block;
  width: 294px;
  position: relative;
  white-space: pre-wrap;

  @media (min-width: 768px) { /* Tablet */
    font-size: 26px;
    line-height: 40px;
    width: 642px;
    font-weight: 500;
  }
  @media (min-width: 1200px) { /* desktop */
    font-size: 28px;
    line-height: 48px;
    width: 10562px;
    font-weight: 500;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const Button = styled.button`
  background-color: #E4C144;
  border: #E4C144;
  border-radius: 20px;
  padding: 5px 15px 5px 15px;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400px;
  color: rgba(6,49,69,1);
  line-height: 24px;
  text-align: center;
  display: block;
  position: relative;
  cursor: pointer;
  justify-content: flex-start;
  align-items: flex-start;
  left: 170px;

  &:hover {
    background-color: #E9CD69;
    color: #063145;
  }

  &:active {
    background-color: #00000066;
    background-image: linear-gradient(to bottom, #00000066 40%, transparent 40%, transparent 60%, #00000066 60%);
    color: #063145;
  }

  @media (min-width: 768px) { /* Tablet */
    justify-content: flex-end;
    align-items: flex-end;
  }
  @media (min-width: 1200px) { /* desktop */
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 32px 16px 32px 16px;
  gap: 0;

  @media (min-width: 768px) { /* Tablet */
    padding: 64px 64px 64px 64px;
  }
  @media (min-width: 1200px) { /* desktop */
    padding: 64px 128px 64px 128px;
  }
`;

Button.propTypes = {
  onClick: PropTypes.func.isRequired, // Type-checking for onClick prop
};

export default HealthierSection;
