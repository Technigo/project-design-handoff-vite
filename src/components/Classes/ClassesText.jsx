import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ClassesTextContainer = styled.div`
  width: 100%;
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
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 40px;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 25px;
    }
    .text-container {
      max-width: 1150px;
      margin: 0 auto;
    }
  }
`;

export const ClassesText = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next
  return (
    <ClassesTextContainer>
      <div className="text-container">
        <h2>{t("homePage.aside.heading")}</h2>{" "}
        {/* Accessing the 'heading' section of the JSON data */}
        <p>{t("homePage.aside.paragraph")}</p>{" "}
        {/* Accessing the 'paragraph' section of the JSON data */}
      </div>
    </ClassesTextContainer>
  );
};
