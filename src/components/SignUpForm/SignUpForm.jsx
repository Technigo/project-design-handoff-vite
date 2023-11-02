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

  .info-form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 45px;
    max-width: 400px;
    .info-text {
      max-width: 400px;
      /* position: relative; */
      /* z-index: 2; */
      color: #ffffff;
      font-size: 10px;
      padding: 10px;
      text-align: left;
    }
  }

  form {
    position: relative;
    z-index: 2;
    padding: 10px;
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
  }

  button {
    position: left;
    border-radius: 10px;
    border: 3px solid #ffffff;
    padding: 4px 8px;
    background-color: transparent;
    color: #ffffff;
    text-transform: uppercase;
  }

  span {
    font-size: 15px;
  }

  p {
    font-size: 10px;
    font-weight: 300;
  }
`;

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
          <div className="info-text">
            <span>STAY CLOSER TO THE ACTION</span>
            <p>
              Enter your name and email address to receive email communications
              from Prima Barre including special offers, on-sale dates, and
              other updates.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="first-name">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />
            </label>
            <label className="last-name">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
            </label>
            <label className="email-address">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </FormContainer>
  );
};
