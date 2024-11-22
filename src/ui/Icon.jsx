import styled from 'styled-components';
import PropTypes from 'prop-types';

export const IconImage = styled.img`
  height: ${({ size }) => size || "21.75px"};
  width: auto;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = ({ src, alt, size }) => {
  return (
    <IconContainer>
      <IconImage src={src} alt={alt} size={size} />
    </IconContainer>
  );
};