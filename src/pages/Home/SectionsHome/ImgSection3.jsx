import styled from "styled-components";

const Img3 = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  max-height: 100%; /* Ensure the image doesn't exceed the container's height */
  width: 100%;
  height: auto;
`;


export const ImgSection3 = () => {
    return (
      <div>
          <Img3
          src="./images/Incense.webp"
          alt="Shakti. The divine feminine cosmic energy"
          width="390px"
          height="390px"
          />
      </div>
    );
  };