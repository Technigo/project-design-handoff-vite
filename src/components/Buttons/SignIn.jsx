import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SignInButtonContainer = styled.button`
  background-color: #ffffff;
  color: #c00202;
  border-radius: 10px;
  font-size: 8px;
  font-weight: 800;
  padding: 0 6px;
  text-align: center;
  text-transform: uppercase;
  border: none;
`;

export const SignInButton = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <SignInButtonContainer>
      <span>{t("homePage.heroSection.button")} </span>{" "}
      {/* Accessing the 'button' section of the JSON data */}
    </SignInButtonContainer>
  );
};
