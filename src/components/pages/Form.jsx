import { useState } from "react";
import CheckBox from "../CheckBox";
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
  CalenderBox,
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const totalAmount = numberOfPeople * pricePerPerson;

  const isSubmitDisabled = name === "" || email === "" || phoneNumber === "" || numberOfPeople === 0;

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setNumberOfPeople(0);
    setIsChecked(false);
  };

  if (deviceType === "none") {
    return null;
  }

  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="name">
          <StyledText style={{ fontSize: deviceType === "tablet" ? "18px" : "inherit" }}>Name</StyledText>
        </Label>
        <Input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">
          <StyledText style={{ fontSize: deviceType === "tablet" ? "18px" : "inherit" }}>e-mail:</StyledText>
        </Label>
        <Input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phoneNumber">
          <StyledText style={{ fontSize: deviceType === "tablet" ? "18px" : "inherit" }}>Phone number:</StyledText>
        </Label>
        <Input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </FormGroup>

      <CounterContainer>
        <FormGroup>
          <CounterBox>
            <Label htmlFor="numberOfPeople">
              <StyledText style={{ fontSize: deviceType === "tablet" ? "18px" : "inherit" }}>
                Number of people
              </StyledText>
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
              <PlusIcon onClick={handleIncrement}></PlusIcon>
            </IncrementDecrementContainer>
          </CounterBox>
        </FormGroup>
        <FormGroup>
          <TotalBox>{totalAmount} $</TotalBox>
        </FormGroup>
      </CounterContainer>
      <FormGroup>
        <label>
          <CalenderBox>
            <CheckBox checked={isChecked} onChange={handleCheckboxChange} />

            <PromiseText>Add a notification to my Calendar</PromiseText>
          </CalenderBox>
        </label>
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
