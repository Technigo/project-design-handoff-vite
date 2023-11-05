import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

const StyledSection = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(176, 53, 8, 0.3) 0.09%,
      #220901 91.74%
    ),
    url("/images/form-image.jpeg");
  background-size: cover;
  height: 543px;
  background-position: 40%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-end;
  padding: 0 24px;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .input-fields {
    display: flex;
    flex-direction: column;
    max-width: 381px;
    gap: 0.5rem;
  }
`;

const StyledInput = styled.input`
  color: var(--white-red);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 32px;
  padding: 16px;

  &:focus {
    border: 1px solid var(--primary);
  }
`;

export const Form = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledSection>
        <h2>{t("form.heading")}</h2>
        <p>{t("form.text")}</p>
        <StyledForm>
          <div className="input-fields">
            <StyledInput
              type="text"
              name="name"
              value={t("form.name")}
              aria-label="name input"
            ></StyledInput>
            <StyledInput
              type="text"
              name="email-address"
              value={t("form.email-address")}
              aria-label="email input"
            ></StyledInput>
          </div>
          <Button className={t("form.button")} aria-label="send">
            {t("form.button")}
          </Button>
        </StyledForm>
      </StyledSection>
    </>
  );
};
