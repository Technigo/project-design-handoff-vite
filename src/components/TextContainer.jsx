import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TextContainer = ({ children }) => {
    return <Container>{children}</Container>;
};