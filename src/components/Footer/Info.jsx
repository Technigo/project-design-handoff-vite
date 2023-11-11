import styled from "styled-components";
import { useTranslation } from "react-i18next";

const InfoContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #f26631 solid;
  border-bottom: 3px #f26631 solid;
  width: 100%;
  height: 100px;
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  span {
    color: #f26631;
  }

  p {
    padding: 5px 0;
  }

  @media screen and (min-width: 768px) {
    border-left: 3px #fff solid;
    border-bottom: 3px #fff solid;
    height: 120px;
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Info = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <InfoContainer className="info">
      <span>{t("homePage.footer.about")}</span>
      <p>{t("homePage.footer.faq")}</p>
      <span>{t("homePage.footer.contact")}</span>
    </InfoContainer>
  );
};
