import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 78px;
  justify-content: center;
  align-items: center;
  height: 782px;
  margin: 0 24px; 

  .image-founder {
    height: 260px;
    width: 260px;
    border-radius: 260px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 30% 50%;
  }

  .image-founder::after {
    display: block;
    position: relative;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(34, 9, 1, 0.7) 16.67%,
      rgba(184, 56, 8, 0) 75.98%,
      #220901 100%);
    width: 100%;
    content: "";
  }

  .founder-text {
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
  }

  .paragraph-small {
    color: var(--white-red)
  }
`;

export const WordsFounder = () => {
  const {t} = useTranslation()
  return (
    <>
      <StyledSection>
        <div className="image-founder">
          <img
            src="/images/image-founder.png"
            alt="image of the founder in yoga clothes"
          />
        </div>

        <div className="founder-text">
          <p className="paragraph-small">{t("aboutPage.founder.heading")}</p>
          <p className="paragraph-small">{t("aboutPage.founder.text")}</p>
        </div>
      </StyledSection>
    </>
  );
};
