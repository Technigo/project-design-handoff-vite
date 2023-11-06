import styled from "styled-components";
import NewsletterImage from "/assets/newsletterimage.jpeg";
import { useTranslation } from "react-i18next";

// Create a styled component for the newsletter container
const StyledNewsletter = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  img {
    width: 100%; /* Ensure the image covers the entire container */
    height: auto;
  }

  button {
    width: 56px;
    height: 32px;
    max-width: 56px;
    color: #081957;
    background: #fff6e9;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
  }
`;

// Create a styled component for the signup section
const Signup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 12px;

  h3 {
    text-align: center;
    font-size: 20px;
    color: #fff6e9;
    font-weight: 400;
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
      font-weight: 500;
      position: absolute;
      left: 10px;
      top: 5px;
    }
  }
`;

// Create a styled component for the form container
const StyledForm = styled.div`
  display: flex;
  padding-left: 0px;
  justify-content: flex-end;
  gap: 120px;
  align-self: stretch;
  width: auto;
`;

// Create a styled component for a visually hidden label for accessibility purposes
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
  const { t } = useTranslation();

  // Define a function to handle form submission
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
