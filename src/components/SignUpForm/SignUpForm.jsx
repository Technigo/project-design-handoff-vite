import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { useTranslation } from "react-i18next";

const FormContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 310px;
  height: 400px;
  position: relative;
  z-index: 1;

  /* .form-wrapper {
    position: relative;
    z-index: 1;
  } */

  .image-container {
    position: relative;
    max-width: 100%;
    height: 400px;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .info-form {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    max-width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;

    .info-text {
      max-width: 400px;
      /* position: relative; */
      /* z-index: 2; */
      color: #ffffff;
      font-size: 10px;
      text-align: left;
      line-height: 2.5;
    }
  }

  form {
    position: relative;
    z-index: 2;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    ::placeholder {
      color: #ffffff;
      opacity: 1; /* Firefox */
    }
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }

  Button {
    border: 2px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }

  span {
    font-size: 15px;
    font-weight: 300;
  }

  p {
    font-size: 10px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    .info-form {
      padding: 64px;
      max-width: 700px;
      top: 5px;
      left: 140px;
    }
  }
`;

export const SignUpForm = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default behaviour of the form
    console.log("Form submitted!"); // Log a message to the console

    // Get form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      // Convert FormData to object
      data[key] = value; // Form data is stored as key/value pairs
    });

    // Log form data to the console
    console.log("Form Data:", data);

    // Clear the form, Reset the form fields
    e.target.reset();
  };

  return (
    <FormContainer>
      <div className="form-wrapper">
        <div className="image-container">
          <img
            src="/form-background.png"
            alt="Background image of a ballerina stretching"
          />
          <div className="overlay"></div>
        </div>
        <div className="info-form">
          <div className="info-text">
            <span>{t("homePage.formSection.heading")}</span>{" "}
            {/*Access the 'heading' section of the JSON data  */}
            <p>{t("homePage.formSection.paragraph")}</p>{" "}
            {/*Access the 'paragraph' section of the JSON data  */}
          </div>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Call the handleSubmit function when the form is submitted */}
            <label className="first-name">
              <input
                type="text"
                name="firstName"
                placeholder={t("homePage.formSection.firstName")}
                required
              />
            </label>
            <label className="last-name">
              <input
                type="text"
                name="lastName"
                placeholder={t("homePage.formSection.lastName")}
                required
              />
            </label>
            <label className="email-address">
              <input
                type="email"
                name="email"
                placeholder={t("homePage.formSection.email")}
                required
              />
            </label>
          </form>
          <Button type="submit">{t("homePage.formSection.button")}</Button>
        </div>
      </div>
    </FormContainer>
  );
};
