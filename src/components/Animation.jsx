import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: #FDF8F5;
  border-radius: 5px;
  overflow: hidden;
  border: 1px #9747FF dotted;
  text-align: center;
`;

const SubText = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
`;

const MainText = styled.div`
  color: #1C7D79;
  font-size: 24px;
  font-family: 'Schoolbell', sans-serif;
  line-height: 30px;
  margin: 10px;
`;

const AnimatedTextComponent = () => {
  const [index, setIndex] = useState(0);
  const messages = [
    'kan hålla händerna varma',
    'får äta sig mätta',
    'får en julklapp att öppna'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SubText>Tack för att du är med och bidrar till att barn</SubText>
      <MainText>{messages[index]}</MainText>
    </Container>
  );
};

export default AnimatedTextComponent;
