import styled from "styled-components";
import NewsletterImage from "/assets/newsletterimage.jpeg";
import { useTranslation } from "react-i18next";

const StyledNewsletter = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  /* flex: 1 0 0;
  align-self: stretch; */

  img {
    //display: flex;
    width: 100%; /* Ensure the image covers the entire container */
    height: auto;
    //color: #fff6e9;
  }

  button {
    width: 56px;
    height: 32px;
    max-width: 56px;
    color: #081957;
    background: #fff6e9;
    font-size: 16px;
    //font-style: normal;
    font-weight: 500;
    //line-height: normal;
    position: absolute;
  }
`;

const Signup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* right: 41.5px;
  bottom: 104px;*/
  gap: 12px;

  h3 {
    text-align: center;
    font-size: 20px;
    color: #fff6e9;
    //font-style: normal;
    font-weight: 400;
    //line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  input {
    border: 0.5px solid #fff6e9;
    background: transparent;
    height: 32px;
    width: 320px;

    &::placeholder {
      color: #fff6e9;
      font-size: 16px;
      //font-style: normal;
      font-weight: 500;
      //line-height: normal;
      position: absolute;
      left: 10px;
      top: 5px;
    }
  }
`;

const StyledForm = styled.div`
  //flex-shrink: 0;
  display: flex;
  padding-left: 0px;
  justify-content: flex-end;
  //align-items: center;
  gap: 120px;
  align-self: stretch;
  //border: 0.5px solid #fff6e9;
  //background: transparent;
  //height: 32px;
  width: auto;
`;

const VisuallyHidden = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Form = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const email = e.target.email.value; // Get the value of the email input field
    console.log("Submitted email:", email); // Log the email in the console
  };

  return (
    <StyledNewsletter>
      <img
        src={NewsletterImage}
        alt="Image of the hand, foot and knee of a person sitting in a yoga position"
      />
      <Signup>
        <h3>{t("newsletter.signup")}</h3>
        <form onSubmit={handleSubmit}>
          {/* ------- E-mail form field -------> */}
          <StyledForm>
            {/* Visually hidden label for accessibility purposes */}
            <VisuallyHidden htmlFor="email">Email Address</VisuallyHidden>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("newsletter.placeholder")}
              required
            />
            <button>{t("newsletter.button")}</button>
          </StyledForm>
        </form>
      </Signup>
    </StyledNewsletter>
  );
};
