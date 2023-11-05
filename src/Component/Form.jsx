import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const FormContainer = styled.div`
  display: flex;
  width: 390px;
  padding: 68px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
`
const FormHead = styled.div`
  color: #38302A;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const FormText = styled.div`
  color: #38302A;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 168.523%;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px
`

const InputField = styled.input`
border-radius: 6px;
border: 1px solid #7A899A;
background: #FFF;
width: 318px;
height: 50px;
`

const TextAreaField = styled.textarea`
border-radius: 6px;
border: 1px solid #7A899A;
background: #FFF;
width: 318px;
height: 100px;
`

const SubmitButton = styled.button`
background: #38302A;
color: white;
border: none;
border-radius: 10px;
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
display: flex;
width: 318px;
height: 42px;
padding: 10px 21px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`

export const Form = () => {
  const { t } = useTranslation();

  return (
    <div>
      <FormContainer>
        <FormHead>{t("head6")}</FormHead>
        <FormText>{t("paragraph8")}</FormText>
        <form>
          <FormField>
            <label htmlFor="firstname">{t("firstname")}</label>
            <InputField type="text" id="firstname" name="firstname" />
          </FormField>
          <FormField>
            <label htmlFor="email">{t("email")}</label>
            <InputField type="email" id="email" name="email" />
          </FormField>
          <FormField>
            <label htmlFor="message">{t("Message")}</label>
            <TextAreaField id="message" name="message" rows="4" />
          </FormField>
          <SubmitButton type="submit">{t("Submit")}</SubmitButton>
        </form>
      </FormContainer>
    </div>
  )
}
