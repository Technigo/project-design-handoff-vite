import { useState, useEffect } from "react";
import { StyledText } from "../StyledComponents";
import {
  FormContainer,
  FormGroup,
  Label,
  IncrementDecrementContainer,
  Input,
  NumberInput,
  FlexibleButton,
  MinusIcon,
  PlusIcon,
  CounterBox,
  CounterContainer,
  TotalBox,
} from "../StyledForm";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const pricePerPerson = 20;
  const [deviceType, setDeviceType] = useState("desktop");

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

  const totalAmount = numberOfPeople * pricePerPerson;

  const isSubmitDisabled = name === "" || email === "" || phoneNumber === "" || numberOfPeople === 0;

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setNumberOfPeople(0);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 350) {
        setDeviceType("none");
      } else if (width >= 350 && width <= 650) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <FlexibleButton
          $backgroundColor="#F65135"
          $textColor="white"
          onClick={handleSubmit}
          $desktop={deviceType === "desktop"}
          $mobile={deviceType === "mobile"}
          $tablet={deviceType === "tablet"}
          disabled={isSubmitDisabled}
          aria-label="Submit"></FlexibleButton>
      </FormGroup>
    </FormContainer>
  );
};
