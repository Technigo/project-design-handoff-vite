import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ClassesTextContainer = styled.div`
  max-width: 500px;
  padding: 16px;
  border-top: 3px solid #f26631;
  border-bottom: 3px solid #f26631;
  background-color: #f1f1f1;
  text-align: center;
  h2 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const ClassesText = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next
  return (
    <ClassesTextContainer>
      <h2>{t("homePage.aside.heading")}</h2>
      <p>{t("homePage.aside.paragraph")}</p>
    </ClassesTextContainer>
  );
};
