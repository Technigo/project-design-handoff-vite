import styled from "styled-components";

const Container = styled.div`
  width: 100vw; /* Set the width to 100% of the viewport width */
   /* Set the height to 100% of the viewport height */
  display: grid;
  grid-template-columns: 1fr 1fr; /* Create two equal columns for the images */
  gap: 0; /* Remove any gap between the images */
`;

const Image = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  max-height: 100%; /* Ensure the image doesn't exceed the container's height */
  width: 100%;
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
        src="./images/eyehands2.webp"
        alt="Hands with painted eyes holding over face"
      />
    </Container>
  );
};
