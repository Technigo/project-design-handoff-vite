import styled from "styled-components";

const Container = styled.div`
  width: 100vw; /* Set the width to 100% of the viewport width */
  height: 100vh; /* Set the height to 100% of the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  max-height: 100%; /* Ensure the image doesn't exceed the container's height */
  width: auto;
  height: auto;
`;


export const BlackAndWhiteImg = () => {
  return (
    <Container>
      <Image
        src="./images/Shakti.webp"
        alt="Shakti. The divine feminine cosmic energy"
      />
      <Image
        src="./images/Eyehands.webp"
        alt="Hands with painted eyes holding over face"
      />
    </Container>
  );
};

//BILDERNA MÅSTE VARA STÖRRE