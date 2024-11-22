import styled from 'styled-components';
import PropTypes from 'prop-types';

export const LogoImage = styled.img`
  height: 2.8125rem;
  align-self: stretch;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = ({ src, alt }) => {
  return (
    <LogoContainer>
      <LogoImage src={src} alt={alt} />
    </LogoContainer>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}