import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AnimationH3, AnimationP } from './Typography';

const AnimationContainer = styled.div`
display: flex;
flex-direction: column;
  background: #FDF8F5;
  border-radius: 20px;
  text-align: center;
  margin: 58px 16px 0 16px;
  height: 100%;
  padding: 30px 20px;
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
    <AnimationContainer>
      <AnimationP>Tack för att du är med och bidrar till att barn</AnimationP>
      <AnimationH3>{messages[index]}</AnimationH3>
    </AnimationContainer>
  );
};

export default AnimatedTextComponent;
