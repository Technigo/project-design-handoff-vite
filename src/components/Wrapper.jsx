import styled from 'styled-components';
import { FrameWithText } from './Frame';
// import { NewFrame } from './NewFrame';

export const Wrapper = styled.div`
  width: 430px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const WrapperWithFrame = () => {
    return (
        <Wrapper>
            <FrameWithText />
            {/* <NewFrame /> */}
        </Wrapper>
    )
}