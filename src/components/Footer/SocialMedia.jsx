import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SocialMediaContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #ffffff solid;
  border-bottom: 3px #ffffff solid;
  width: 100%;
  height: 100px;
  position: relative;
  padding: 20px;
  margin-bottom: 10px;

  img {
    width: auto;
    height: 18px;
  }

  p {
    font-size: 12px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    color: #f26631;
    padding-bottom: 20px;
  }

  .social-media-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 400px;
    gap: 10px;
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    height: 120px;
    .social-media-icons {
      justify-content: center;
      gap: 50px;
      padding: 0 30px;
    }
    img {
      height: 20px;
    }

    p {
      padding-bottom: 30px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    .social-media-icons {
      max-width: 600px;
    }
    img {
      height: 24px;
    }
    p {
      padding-bottom: 25px;
      font-size: 18px;
    }
  }
`;

export const SocialMedia = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <SocialMediaContainer>
      <p>{t("homePage.footer.heading")}</p>{" "}
      {/* Accessing the 'heading' section of the JSON data */}
      <div className="social-media-icons">
        <img src="./facebook.svg" alt="Facebook" />
        <img src="./instagram.svg" alt="Instagram" />
        <img src="/twitter-x.svg" alt="Twitter-X" />
        <img src="/youtube.svg" alt="Youtube" />
      </div>
    </SocialMediaContainer>
  );
};
