import styled from "styled-components";
import NewsletterImage from "/assets/newsletterimage.jpeg";

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
  return (
    <div className="newsletter">
      <img
        src={NewsletterImage}
        alt="Image of the hand, foot and knee of a person sitting in a yoga position"
      />
      <h3>Sign up for our newsletter</h3>
      <form>
        {/* ------- E-mail form field -------> */}
        <div className="form-area">
          {/* Visually hidden label for accessibility purposes */}
          <VisuallyHidden htmlFor="email">Email Address</VisuallyHidden>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};
