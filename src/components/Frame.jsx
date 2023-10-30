import styled from 'styled-components';
import { StyledText } from './StyledText';
import { ImageComponent } from './ImageComponent';
import { StyledDescription } from './StyledDescription';
import { NewFrame } from './NewFrame';
import { StyledInfoText } from './StyledInfoText';
import { NewDividingLine } from './NewDividingLine';
import { Card } from './Card';
import { TestImageComponent } from './TestImageComponent';

export const Frame = styled.div`
  display: flex;
  height: 20px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
  background: #2AA9C0;
`;

export const FrameWithText = () => {
    return (
        <Frame>
            <StyledText>Edge Performance</StyledText>
            <ImageComponent />
            <StyledDescription>
              Find and sharpen your competitive edge.<br />
              We are the gym that builds champions.
            </StyledDescription>
            <NewFrame />
            <StyledInfoText>
              You have put in the hours, you have put in the sweat. You are already a relentless competitor. 
              You have strength, explosivity, speed and balance - but we will help you gain more. 
              Are you a serious hockey player ready to take your game to the next level? <br /><br />
              Click below to see more about what we do for our athletes:
            </StyledInfoText>
            <NewDividingLine />
            <Card 
              title="TECHNOLOGY EDGE"
              description="We take you from the rink to the lab. <br/> <br/> We offer Skatemill practice and analysis, VO2-max and VO2-peak measurements, lactate threshold or submax tests and iDXA body composition tests that will help us boost you to peak performance."
            />
            <TestImageComponent />
        </Frame>
    )
}