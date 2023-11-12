import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { useTranslation } from "react-i18next";

const FormContainer = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  height: fit-content;

  .image-container {
    position: relative;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  @media screen and (min-width: 700px) {
    img {
      height: 100%;
    }
  }

  .overlay {
    position: absolute;
    inset: 0; /* Position the overlay on all four sides of the container */
    background-color: rgba(0, 0, 0, 0.8);
  }

  .info-form {
    position: absolute;
    inset: 0;
    margin: auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .info-text {
    line-height: 160%;
  }

  form {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  label {
    line-height: 160%;
    ::placeholder {
      color: #ffffff;
      font-size: 16px;
      opacity: 1; /* Firefox */
      font-weight: 700;
    }
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 3px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }

  Button {
    font-size: 14px;
    font-weight: 800;
    line-height: 160%; /* 22.4px */
    border-radius: 10px;
    border: 3px solid #fff;
    background-color: transparent;
    color: #ffffff;
    padding: 8px 16px;
    margin-top: 20px;
  }

  span {
    /* h2 mobile */
    font-size: 20px;
    font-weight: 600;
  }

  p {
    /* body mobile */
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    height: auto;

    .names {
      display: flex;
      flex-direction: row; /* Make the labels appear side by side */
      gap: 10px;

      label.first-name,
      label.last-name {
        width: 50%; /* Make each label take 50% of the width */
      }
    }
    label.email-address {
      width: 100%; /* Make email label take 100% of the width */
    }

    .info-form {
      max-width: 700px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 80px;
      padding: 64px 0;
    }

    .info-text {
      margin-bottom: 40px;
    }
    p {
      font-size: 20px;
      font-weight: 600;
      line-height: 160%;
    }

    Button {
      width: fit-content;
      font-size: 24px;
      font-weight: 600;
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
          <div className="overlay">
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
                <div className="names">
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
                </div>
                <label className="email-address">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("homePage.formSection.email")}
                    required
                  />
                </label>
                <Button type="submit">
                  {t("homePage.formSection.button")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};
