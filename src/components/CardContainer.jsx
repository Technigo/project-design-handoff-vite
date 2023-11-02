import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 8px;
`;

export const CardContainer = ({ children }) => {
    return <Container>{children}</Container>;
};