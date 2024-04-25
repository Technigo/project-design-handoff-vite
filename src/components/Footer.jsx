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
    line-height: 2rem;
  }

  .footer-title-breaker {
    display: block;
  }

  .social-media {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    top: 43%;
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
    cursor: pointer;
    font-weight: 900;
  }

  .info-links {
    color: #000;
    font-family: "AvenirMedium", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }

  .link {
    cursor: pointer;
    list-style-type: none;

    margin-top: 3px;
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

  @media (max-width: 1200px) {
    .social-media {
      right: 8%;
    }
  }

  @media (max-width: 985px) {
    padding: 1.5rem 0.8rem 1rem;
    .social-media {
      right: 6%;
    }
  }

  @media (max-width: 744px) {
    position: none;

    .footer-title {
      margin-bottom: 0;
      font-size: 1rem;
      line-height: 19px;
    }

    .footer-title-breaker {
      display: inline;
    }

    .social-media {
      margin: 40px auto;
      position: initial;
      right: auto;
      top: auto;
    }

    .media-icon {
      width: 40px;
      height: 40px;
    }

    .further-info {
      width: 100%;
      padding: 0 0.5rem;
      justify-content: space-around;
      align-items: center;
    }

    .text-info {
      align-items: flex-end;
    }

    .company-name {
      font-size: 19px;
    }

    .address-detail {
      font-size: 1rem;
    }

    .info-links {
      font-size: 1rem;
    }

    .language-select {
      width: 30%;
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 428px) {
    .footer-title-breaker {
      display: block;
    }

    .further-info {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .text-info {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    .language-select {
      width: 50%;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <h3 className="footer-title">
        Pilates promises greater flexibility, strength and{" "}
        <span className="footer-title-breaker">
          stamina - and yes, everybody&#39;s welcome
        </span>
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
          <ul className="info-links">
            <li className="link">Privacy policy</li>
            <li className="link">Download app</li>
            <li className="link">Cancellation policy</li>
            <li className="link">My account/log in</li>
          </ul>
        </div>
        <select className="language-select">
          <option className="placeholder" disabled defaultValue>
            Select Language
          </option>
          <option value="en">English</option>
          <option value="sv">Swedish</option>
        </select>
      </div>
    </StyledFooter>
  );
};
