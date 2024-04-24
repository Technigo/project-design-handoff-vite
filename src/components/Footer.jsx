import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #e4dbd2;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 40px 1rem;
  position: relative;

  .footer-title {
    text-align: center;
    margin-bottom: 3rem;
    font-family: "AvenirMedium", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 19px;
  }

  .social-media {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    top: 33%;
  }

  .media-link {
    margin: 0 20px;
  }

  .media-icon {
    width: 56px;
    height: 56px;
  }

  .further-info {
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .text-info {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .company-name {
    color: #000;
    font-family: Calistoga;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin-bottom: 2.5rem;
  }

  .address-detail {
    color: #000;
    font-family: "AvenirMedium", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px; /* 166.667% */
  }

  address {
    font-style: normal;
  }

  .company-email {
    font-weight: 900;
  }

  .info-links {
    color: #000;
    font-family: "AvenirMedium", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }

  .language-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;

    border-radius: 12px;
    border: 1px solid #000;

    width: 20%;
    background: #fff;
    display: flex;
    margin-top: 8.5rem;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;

    color: #000;

    font-family: "AvenirMedium", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <h3 className="footer-title">
        Pilates promises greater flexibility, strength and stamina - and yes,
        everybody&#39;s welcome
      </h3>
      <div className="social-media">
        <a className="media-link" href="#">
          <img className="media-icon" src="/socialicon3.png" alt="facebook" />
        </a>
        <a className="media-link" href="#">
          <img className="media-icon" src="/socialicon2.png" alt="instagram" />
        </a>
        <a className="media-link" href="#">
          <img className="media-icon" src="/socialicon1.png" alt="twitter" />
        </a>
      </div>
      <div className="further-info">
        <div className="text-info">
          <div className="company-address">
            <h4 className="company-name">Curve Pilates Space</h4>
            <div className="address-detail">
              <address>8 Kungsvägen, 19134</address>
              <p className="phone-number">020 8765 43</p>
              <p className="company-email">hello@curvespace.com</p>
            </div>
          </div>
          <div className="info-links">
            <p className="link">Privacy policy</p>
            <p className="link">Download app</p>
            <p className="link">Cancellation policy</p>
            <p className="link">My account/log in</p>
          </div>
        </div>
        <select className="language-select">
          <option disabled>Select Language</option>
          <option value="en">English</option>
          <option value="sv">Swedish</option>
        </select>
      </div>
    </StyledFooter>
  );
};
