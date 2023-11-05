import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DownloadContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #f26631 solid;
  border-bottom: 3px #f26631 solid;
  width: 100%;
  height: 100px;
  position: relative;
  padding: 20px;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: auto;
  }

  .download-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 15px;
  }
  p {
    font-size: 12px;
    text-align: center;
    font-weight: 600;
  }
  span {
    color: #f26631;
    text-transform: uppercase;
  }
`;

export const Download = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next
  return (
    <DownloadContainer className="download">
      <p>
        {t("homePage.footer.paragraph")}
        {/* Download the <span>prima barre</span> app, access classes from anywhere,
        anytime */}
      </p>
      <div className="download-icons">
        <img src="/apple-small.svg" alt="Download from app-store" />
        <img src="/google-play-small.png" alt="Download from google-play" />
      </div>
    </DownloadContainer>
  );
};
