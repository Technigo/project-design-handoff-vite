import styled from "styled-components";

//Styling for the img
  const Img2 = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  max-height: 100%; /* Ensure the image doesn't exceed the container's height */
  width: 100%;
  height: auto;`;

export const ImgSection2 = () => {
    return (
          <Img2
          src="./images/womanpraying.webp"
          alt="Shakti. The divine feminine cosmic energy"
          />
    );
  };