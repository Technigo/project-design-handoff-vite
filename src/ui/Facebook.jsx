import styled from "styled-components";
import facebookIconSrc from "../../src/assets/Facebook.png"; 

export const IconImage = styled.img`
  height: 24px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FacebookIcon = () => (
    <IconContainer>
      <IconImage src={facebookIconSrc} alt="Facebook" style={{ height: '40px' }} />
    </IconContainer>
  );

