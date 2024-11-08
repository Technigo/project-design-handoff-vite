import styled from 'styled-components';
import instagramIconSrc from '../../src/assets/Instagram.png';

export const IconImage = styled.img`
  height: 24px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InstagramIcon = () => (
  <IconContainer>
    <IconImage src={instagramIconSrc} alt="Instagram" style={{ height: '40px' }} />
  </IconContainer>
);