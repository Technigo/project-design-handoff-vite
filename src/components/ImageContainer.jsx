import styled from 'styled-components';

const Container = styled.div`
  height: 220px;
  flex: 1 0 0;
  border-radius: 8px;
  background-color: red;
//   background: url(${props => props.image}) no-repeat center/cover;
`;

export const ImageContainer = ({ image }) => {
    return <Container image={image} />;
};