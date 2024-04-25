import { UnionContainer, UnionStyled, TitleReg, RegisterContainer } from "../StyledRegister";
import { Page, StyledH1, StyledText } from "../StyledComponents";
import { Form } from "./Form.jsx";

export const Register = () => {
  return (
    <Page>
      <RegisterContainer>
        <UnionContainer>
          <UnionStyled />
        </UnionContainer>
        <TitleReg>
          <StyledH1>Register for the event</StyledH1>
        </TitleReg>
        <StyledText style={{ textAlign: "center" }}>
          Ensure a spot and invite your friends to join in the celebration of Midsommar with a blend of yoga, meditation
          and feasting.
        </StyledText>
        <Form />
      </RegisterContainer>
    </Page>
  );
};
