import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";



const Slide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateValue}%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: 744px) {
    gap: 80px;
  } 
`

const feedback = [{
  image: "./src/assets/feedback/JimDeskTabl.png",
  text: "“I am so happy that I found Urban Spin for me, the classes are giving me the best balance after a stressful day at work!”",
  name: "Jim Svensson, Architect"
},
{
  image: "./src/assets/feedback/ElviraDeskTabl.png",
  text: "“The classes at Urban Spin are my highlight of the week. The instructors are amazing and the high-beat music gives the right push. Love it!”",
  name: "Elvira Andersson, Influencer"
},
{
  image: "./src/assets/feedback/MikeDeskTabl.png",
  text: "“What I love the most is the flexibility, there are so many classes during the week! And of course, the session itself.”",
  name: "Mike Kjell, Project Manager"
}]

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex(prevIndex => (prevIndex === feedback.length - 1 ? 0 : prevIndex + 1)),
    onSwipedRight: () => setIndex(prevIndex => (prevIndex === 0 ? feedback.length - 1 : prevIndex - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const translateValue = -index * 100;

  return (
    <CarouselContainer {...handlers}>
      {feedback.map(({ image, text, name, id }) => (
        <Slide key={id} translateValue={translateValue}>
          <CarouselBox>
            <Image src={image} alt={`Image of ${name}`} />
            <TextDiv>
              <Text>{text}</Text>
              <Name>{name}</Name>
            </TextDiv>
          </CarouselBox>
        </Slide>
      ))}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction; row;
  overflow: hidden;
  width: 100%;
`

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  gap: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    flex-direction: row;
    gap: 40px;
    margin-left: 32px;
    margin-right: 184px;
  }
`

const Image = styled.img`
  width: 160px;
  height: 160px;
  
  @media (min-width: 744px) {
    width: 208px;
    height: 208px
  }
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    gap: 32px;
  }
`

const Text = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: left;
  
`

const Name = styled.p`
  text-align: left;
`