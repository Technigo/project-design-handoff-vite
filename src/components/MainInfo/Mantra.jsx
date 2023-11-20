import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MantraContainer = styled.div`
  width: 100%;
  padding: 10px 24px;
  border-top: 3px solid #f26631;
  border-bottom: 3px solid #f26631;
  background-color: #f1f1f1;
  font-weight: 600;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding: 20px 30px;
  }
`;

export const Mantra = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <MantraContainer>
      {t("homePage.mainSection.secondaryHeading")}
      <br />
      {t("homePage.mainSection.triraryHeading")}
    </MantraContainer>
  );
};
