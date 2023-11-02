import styled from "styled-components";

const FormContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: auto;

  .form-wrapper {
    position: relative;
    z-index: 1;
  }

  .image-container {
    position: relative;
    max-width: 100%;
    height: auto;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
  }

  form {
    position: relative;
    z-index: 2;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #000000;
  }
  .info-form {
    padding: 16px 40px;

    p {
      position: relative;
      z-index: 2;
      color: black;
      font-size: 10px;
      padding: 20px;
    }
  }
`;
/* .form-wrapper {
    padding: 16px 40px;

    form {
      position: relative;
      z-index: 1;
      padding: 40px 20px;
      margin-top: -100px;
    }
    p {
      font-size: 10px;
      position: relative;
      z-index: 1;
    }
  }

  .image-container {
    position: relative;
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.56);
    }
  } 
`;*/

export const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log form data to the console
    console.log("Form Data:", data);
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
          <p>
            <span>STAY CLOSER TO THE ACTION</span> Enter your name and email
            address to receive email communications from Prima Barre including
            special offers, on-sale dates, and other updates.
          </p>
          <form onSubmit={handleSubmit}>
            <label className="first-name">
              <input type="text" name="firstName" required />
            </label>
            <label className="last-name">
              <input type="text" name="lastName" required />
            </label>
            <label className="email-address">
              <input type="email" name="email" required />
            </label>
            {/* <Button type="submit">Sign Up</Button> */}
          </form>
        </div>
      </div>
    </FormContainer>
  );
};
