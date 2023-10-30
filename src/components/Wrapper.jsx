import styled from 'styled-components';
import { Frame } from './Frame';

export const Wrapper = styled.div`
  width: 430px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const WrapperWithFrame = () => {
    return (
        <Wrapper>
            <Frame />
        </Wrapper>
    )
}