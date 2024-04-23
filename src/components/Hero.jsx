import heroImage from "../assets/heroSectionImages/heroImage.png";
import styled from "styled-components";

export const Hero = () => {
  return (
    <div>
      Hero section
      <StyledheroImage></StyledheroImage>
    </div>
  );
};

const StyledheroImage = styled.div`
  background: url(${heroImage});
  background-size: cover;
`;
