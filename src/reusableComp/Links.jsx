//Reusable component for links in the footer
import styled from 'styled-components';

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px; 
`;

const StyledLink = styled.a`
color: var(--cobalt);
font-family: JetBrains Mono;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
`;

export const Links = ({ links }) => {
  return (
    <LinksContainer>
      {links.map((link, index) => (
        <StyledLink key={index} href={link.url}>
          {link.text}
        </StyledLink>
      ))}
    </LinksContainer>
  );
};
