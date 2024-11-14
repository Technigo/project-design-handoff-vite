import styled from 'styled-components';
import { SupportgroupCard } from '../components/SupportgroupCard';
import { BodyText, Headline2 } from '../ui/Typography';
import { Spacer } from '../ui/Spacer';
import WelcomeButton from '../ui/WelcomeButton';

const SupportgroupSectionText = styled.div`
grid-column: span 4;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding: 2rem 1rem 1.5rem 1rem;
max-width: 700px;

@media (min-width: 768px){
    grid-column: span 8;
  }

@media (min-width: 1200px){
    grid-coulmn: span 12;
  }
`
const SupportgroupSectionStyle = styled.div`
grid-column: span 4;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FFCAF8;
padding: 0rem 0rem 2.5rem 0rem;

@media (min-width: 768px){
    grid-column: span 8;
  }
@media (min-width: 1200px){
    grid-column: span 12;
  }
`
export const SupportgroupSection = () => {
  return (
    <SupportgroupSectionStyle>
      <SupportgroupSectionText>
        <Headline2>
          Delta i våra samtalsgrupper
        </Headline2>
        <Spacer />
        <BodyText>
          Genom att prata med andra - både online och genom fysiska träffar - blir det enklare att hantera det som är svårt. Våra gruppledare har egen erfarenhet och alla grupper är slutna.
        </BodyText>
        <Spacer />
        <BodyText>
          Delta i våra grupper eller starta en ny utifrån dina behov.
        </BodyText>
      </SupportgroupSectionText>
      <SupportgroupCard />
      <WelcomeButton>Fler aktiva stödgrupper</WelcomeButton>
    </SupportgroupSectionStyle>
  )
};