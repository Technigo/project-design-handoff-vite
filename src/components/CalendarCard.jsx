import styled from 'styled-components';
import { DateCard } from '../ui/DateCard';
import calendarcard1 from '../assets/calendarcard1.png';
import calendarcard2 from '../assets/calendarcard2.png';
import { CalendarCardTitle, CalendarCardText } from '../ui/Typography';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%; 
  max-width: 400px; 
  margin: 1rem auto;
  background-color: #f3c1e2;
  padding: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

export const CalendarCard = ({ image, date, month, title, location, time }) => {
  const selectedImage = image === 'calendarcard1' ? calendarcard1 : calendarcard2;

  return (
    <CardContainer>
      <Image src={selectedImage} alt={title} />
      <DateCard date={date} month={month} />
      <CardContent>
        <CalendarCardTitle>{title}</CalendarCardTitle>
        <CalendarCardText>{location}</CalendarCardText>
        <CalendarCardText>{time}</CalendarCardText>
      </CardContent>
    </CardContainer>
  );
};
