import { useState } from "react";
import useDeviceType from "../useDeviceType";
import { StyledText } from "../StyledComponents";
import {
  FormContainer,
  FormGroup,
  Label,
  IncrementDecrementContainer,
  Input,
  NumberInput,
  MinusIcon,
  PlusIcon,
  CounterBox,
  CounterContainer,
  TotalBox,
  FlexibleButton,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "../StyledForm";
import { PromiseText } from "../StyledPromise";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const pricePerPerson = 20;
  const deviceType = useDeviceType();
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDecrement = () => {
    setNumberOfPeople(Math.max(0, numberOfPeople - 1));
  };

  const handleIncrement = () => {
    setNumberOfPeople(numberOfPeople + 1);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const totalAmount = numberOfPeople * pricePerPerson;

  const isSubmitDisabled = name === "" || email === "" || phoneNumber === "" || numberOfPeople === 0;

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setNumberOfPeople(0);
  };

  if (deviceType === "none") {
    return null;
  }

  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="name">
          <StyledText>Name:</StyledText>
        </Label>
        <Input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">
          <StyledText>Email:</StyledText>
        </Label>
        <Input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phoneNumber">
          <StyledText>Phone Number:</StyledText>
        </Label>
        <Input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </FormGroup>

      <CounterContainer>
        <FormGroup>
          <CounterBox>
            <Label htmlFor="numberOfPeople">
              <StyledText>Number of people</StyledText>
            </Label>
            <IncrementDecrementContainer>
              <MinusIcon onClick={handleDecrement}></MinusIcon>

              <NumberInput
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                min="0"
                value={numberOfPeople}
                readOnly
              />
              <PlusIcon onClick={handleIncrement}>+</PlusIcon>
            </IncrementDecrementContainer>
          </CounterBox>
        </FormGroup>
        <FormGroup>
          <TotalBox>${totalAmount}</TotalBox>
        </FormGroup>
      </CounterContainer>
      <FormGroup>
        <CheckboxContainer>
          <HiddenCheckbox id="notificationCheckbox" checked={isChecked} onChange={handleCheckboxChange} />
          <StyledCheckbox checked={isChecked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
          <PromiseText>Add a notification to my Calendar</PromiseText>
        </CheckboxContainer>
      </FormGroup>
      <FormGroup>
        <FlexibleButton
          onClick={handleSubmit}
          $desktop={deviceType === "desktop"}
          $mobile={deviceType === "mobile"}
          $tablet={deviceType === "tablet"}
          disabled={isSubmitDisabled}
          aria-label="Submit">
          Register now
        </FlexibleButton>
      </FormGroup>
    </FormContainer>
  );
};
