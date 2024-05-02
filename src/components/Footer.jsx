import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterPart $border>
        <h3>LIFTLY</h3>
        <StyledSelect aria-label="Select to choose the language of the page.">
          <option value="english">English</option>
          <option value="swedish">Swedish</option>
          <option value="french">French</option>
          <option value="german">German</option>
        </StyledSelect>
        <p>
          E-mail: <a className="underline">info@liftly.com</a>
        </p>
        <p>
          Phone: <a className="underline">(555) 555-5555</a>
        </p>
      </FooterPart>
      <FooterPart $center $bright>
        <a href="#">About us</a>
        <a href="#">Contact</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Legal Notice</a>
        <a href="#">Privacy Policy</a>
      </FooterPart>
      <FooterPart $row $small>
        <StyledSMIcons>
          <p>FOLLOW US</p>
          <div className="icon-box">
            <FaInstagram className="icons" />
            <FaXTwitter className="icons" />
            <FaFacebook className="icons" />
          </div>
        </StyledSMIcons>
        <div className="download-white">
          <img src="AppStoreWhite.svg" alt="Download App Store"></img>
          <img src="GoogleWhite.svg" alt="Download Google Play Store"></img>
        </div>
      </FooterPart>
    </StyledFooter>
  );
};

//Styled Components

const StyledFooter = styled.footer`
  height: 668px;
  background-color: #3e4c65;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 24px;
  color: #fff;
  gap: 32px;

  @media screen and (min-width: 834px) {
    height: 280px;
    flex-direction: row;
    padding: 32px;
    gap: 20px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 128;
    gap: 84px;
  }
`;

const FooterPart = styled.div`
  display: flex;
  flex-direction: ${({ $row }) => ($row ? "row" : "column")};
  gap: ${({ $small }) => ($small ? "12px" : "32px")};
  border-bottom: ${({ $border }) => ($border ? "solid 1px #FFFFFF80" : "none")};
  padding-bottom: ${({ $border }) => ($border ? "32px" : "0")};
  text-align: ${({ $center }) => ($center ? "center" : "none")};

  @media screen and (min-width: 441px) {
    gap: 32px;
  }

  @media screen and (min-width: 834px) {
    border-bottom: none;
    border-right: ${({ $bright }) =>
      $bright ? "solid 1px #FFFFFF80" : "none"};
    text-align: left;
    padding-bottom: 0;
    padding-right: ${({ $bright }) => ($bright ? "20px" : "0")};
    padding-left: ${({ $bright }) => ($bright ? "10px" : "0")};
  }

  @media screen and (min-width: 1440px) {
    padding-right: ${({ $bright }) => ($bright ? "84px" : "0")};
    padding-left: ${({ $bright }) => ($bright ? "79px" : "0")};
    gap: ${({ $small }) => ($small ? "190px" : "32px")};
  }

  h3 {
    font-weight: bold;
    font-size: 30px;
  }

  a {
    color: #fff;
  }

  .download-white {
    width: 181px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .underline {
    text-decoration: underline;
  }
`;

const StyledSelect = styled.select`
  width: 147px;
  height: 34px;
  position: relative;
  background-color: #3e4c65;
  color: #fff;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 2px;
  //Making the standart arrow dispappear
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(arrow-down.svg);
  background-repeat: no-repeat;
  background-position: 95%;
`;

const StyledSMIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  p {
    font-size: 13px;
  }

  .icon-box {
    display: flex;
    gap: 13px;
  }

  .icons {
    font-size: 32px;
  }
`;
