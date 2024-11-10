import styled from "styled-components";
import footerLogo from "/public/assets/logo-images/footer-logo.svg";
import copyright from "/public/assets/social.media-images/copyright.svg";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 177px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  box-sizing: border-box;
`;

const FooterLogo = styled.img`
  width: 168px;
  height: 154px;
  flex-shrink: 0;
  top: 16px;
  left: 300px;
`;

const TextBox = styled.div`
  // width: 108px;
  display: inline-flex;
  height: 1.875rem;
  padding: 0rem 1rem 0rem 0.5rem;
  align-items: center;
  line-height: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 7px;
  text-align: center;
`;

const StyledCopyright = styled.img`
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={footerLogo} alt="Footer Logo" />
      <TextBox>
        <p>
          THORONDOR&apos;S KENNEL <StyledCopyright src={copyright} alt="" />
          &nbsp;2024
        </p>
      </TextBox>
    </FooterContainer>
  );
};
