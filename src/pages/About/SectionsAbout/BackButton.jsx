//Back button that allows the user to go back to the home page
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

//Styling for the text
const BackLink = styled(Link)`
text-decoration: none;
color: var(--cobalt); 
display: flex;
align-items: center;
gap: 5px; 
font-weight: 800;
font-family: JetBrains Mono;
font-size: 12px;
font-style: normal;
line-height: normal;
`;

//Styling for the icon
const BackIcon = styled(AiOutlineLeft)`
  font-size: 1.2rem; 
`;

export const BackButton = () => {
  return (
    <BackLink to="/" className="back-text">
      <BackIcon aria-label="Go Back to Home page" />
      Back
    </BackLink>
  );
};
