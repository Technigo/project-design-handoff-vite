import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SignInButtonContainer = styled.button`
  background-color: #fff;

  color: #c00202;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  padding: 0 8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  height: fit-content;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 0 16px;
    margin: 15px;

    @media screen and (min-width: 1024px) {
    }
  }
`;

export const SignInButton = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <SignInButtonContainer>
      {t("homePage.heroSection.button")}
      {/* Accessing the 'button' section of the JSON data */}
    </SignInButtonContainer>
  );
};
