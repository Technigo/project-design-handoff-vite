import styled from 'styled-components';
const CircleBackground = () => {

  const Circle = styled.div`
   position: absolute;
  right: 50%;
  top: 65%;
  width: 435px;
  height: 431px;
  background: transparent;
  border-radius: 435px;
  border: 16px solid #b00;
  z-index: -1;
`



  return (
    <Circle>

    </Circle>
  );
};

export default CircleBackground;
