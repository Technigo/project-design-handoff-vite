/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import sparkle from "../../assets/Sparkle.png";
import { useEffect } from "react";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: #EEE7EB;
  padding: 0.81rem 1rem 2.56rem 1rem;
  border-radius: 1.125rem;
  width: 328px;
  text-align: center;
  position: relative; 
  box-shadow: 0px 0px 8px 0px rgba(54, 12, 37, 0.50) inset, 8px 8px 8px 0px rgba(0, 0, 0, 0.25);
`;

const SparkleImgBottomRight = styled.img`
  position: absolute;
  bottom: 20px;
  right: -5px;
  width: 2.74888rem;
  height: 1.859rem;
  transform: rotate(-7.732deg);
  flex-shrink: 0;
`;

const SparkleImgBottomLeft = styled.img`
  position: absolute;
  bottom: 20px;
  left: 1.5rem;
  width: 2.45263rem;
  height: 2.72081rem;
  transform: rotate(-23.252deg);
  flex-shrink: 0;
`;

const SparkleImgBottomLeftSmall = styled.img` //Smaller sparkle 
  position: absolute;
  bottom: 30px; /* Slightly below the top left sparkle */
  left: 0.5rem;
  width: 1.98213rem;
  height: 2.01444rem;
  transform: rotate(-1.26deg);
  flex-shrink: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #000;
  cursor: pointer;
  font-size: 1rem; 
  font-weight: bold; 
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
`;
const Input = styled.input`
  padding: 0.5rem;
  width: 8.8125rem;
  height: 1.6875rem;
  flex-shrink: 0;
  border: 1px solid #ccc;
`;
const StyledTextArea = styled.textarea`
  width: 17.9375rem;
  height: 5.6875rem;
  flex-shrink: 0;
  resize: none; /* Optional: Prevents resizing */
  padding: 0.5rem; /* Optional: Adds padding for better readability */
  border: 1px solid #ccc;
  margin-left: 0; 
`;

const StyledLabel = styled.label`
  font-family: "Josefin Sans";  
  font-size: 0.875rem;  
  font-weight: 400;  
  color: #000;  
  margin-right: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align items to the right */
  gap: 0.5rem;  /* Add space between checkbox and text */
  margin-top: 1rem;  /* Add space between the other fields */
`;

const CheckboxInput = styled.input`
  margin-left: 0;  
  width: 1.4375rem;
  height: 1.4375rem;
  flex-shrink: 0;
  border: 1px solid #000;
  background: #E1C9D8;
`;

const heading3 = "Get your personalized spell"

export const SignUpForm = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <Typography typography={heading3} level={3} />
        <CloseButton onClick={onClose}>X</CloseButton>
        <SparkleImgBottomLeftSmall src={sparkle} alt="Sparkle Icon Bottom Left Smaller" />
        <SparkleImgBottomLeft src={sparkle} alt="Sparkle Icon Bottom Left" />
        <SparkleImgBottomRight src={sparkle} alt="Sparkle Icon Bottom Right" />

        {/* Signup Form */}
        <Form>
          <Fieldset>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <Input type="text" id="name" name="name" required />
          </Fieldset>
          <Fieldset>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <Input type="email" id="email" name="email" required />
          </Fieldset>
          <Fieldset>
            <StyledLabel htmlFor="spellType">What do you wish for dear?</StyledLabel>
            <StyledTextArea
              id="wishText" // Links label to this textarea for accessibility
              name="spellRequest" // Sets name for form submission
              aria-required="true"  // Accessibility: Indicates the field is required
              aria-describedby="wishTextHelp" // Links to help text for screen readers
              required
            />
          </Fieldset>
          <Fieldset>
            <CheckboxContainer>
              <StyledLabel htmlFor="agree">I accept the terms
              </StyledLabel>
              <CheckboxInput type="checkbox" id="agree" name="agree" required />
            </CheckboxContainer>
          </Fieldset>
          <Button text="Request spell" type="submit" />
        </Form>
      </PopupContent>
    </PopupOverlay>
  );
};
