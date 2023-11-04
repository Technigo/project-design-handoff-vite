import styled from "styled-components";

const Img2SectionContainer = styled.div`

  `;
  //Denna kan ev tas bort

  const Img2 = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  max-height: 100%; /* Ensure the image doesn't exceed the container's height */
  width: 100%;
  height: auto;`;



export const ImgSection2 = () => {
    return (
      <Img2SectionContainer>
          <Img2
          src="./images/womanpraying.webp"
          alt="Shakti. The divine feminine cosmic energy"
          />
      </Img2SectionContainer>
    );
  };