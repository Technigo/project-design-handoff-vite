import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const BackLink = styled(Link)`
text-decoration: none;
color: var(--cobalt); 
display: flex;
align-items: center;
gap: 5px; /* Adjust the gap as needed */
font-weight: 800;
font-family: JetBrains Mono;
font-size: 12px;
font-style: normal;
line-height: normal;
`;

const BackIcon = styled(AiOutlineLeft)`
  font-size: 1.2rem; /* Customize the icon size */
  /* Add more styles as needed */
`;

export const BackButton = () => {
  return (
    <BackLink to="/" className="back-text">
      <BackIcon aria-label="Go Back to Home page" />
      Back
    </BackLink>
  );
};
