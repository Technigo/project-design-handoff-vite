import styled from 'styled-components';
import { CalendarCard } from '../components/CalendarCard'; 
import { Spacer } from '../ui/Spacer';
import { CalendarTitle } from '../ui/Typography';
import { CalendarButton } from '../ui/Typography';

const CalendarContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const Calendar = () => {
  return (
    <CalendarContainer>
    <Spacer />
      <CalendarTitle>Aktiviteter</CalendarTitle>
      <CalendarCard 
        image="calendarcard1" 
        date="26" 
        month="Nov" 
        title="Film och samtal: Sliding Doors" 
        location="Plats: Downtown Camper" 
        time="Tid: 18.45" 
        />
        <CalendarCard 
        image="calendarcard2" 
        date="8" 
        month="Dec" 
        title="Army-träff" 
        location="Plats: Downtown Camper" 
        time="Tid: 14-16.30" 
        />
    <CalendarButton>Fler aktiviteter</CalendarButton>
    <Spacer />
    </CalendarContainer>
  );
};
