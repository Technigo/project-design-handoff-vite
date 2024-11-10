import styled, { keyframes } from "styled-components";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png"
];

const slideAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SlideshowContainer = styled.div `
    overflow: hidden; 
    width: 100%; 
    margin: auto; 
    position: relative;
`;

const Slide = styled.img`
  width: 100%; 
  height: 100%;
  flex-shrink: 0;
  width: 24.375rem;
  height: 24.375rem;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 48rem;
    height: 48rem;
  }
`;

const SlideshowInner = styled.div `
    display: flex;
    width: calc(500%); 
    animation: ${slideAnimation} 20s infinite linear;
    
    `;



  export const Slideshow = () => {
    return (
      <SlideshowContainer>
        <SlideshowInner>
          {images.map((image, index) => (
            <Slide key={index} src={image} alt={`Slide ${index}`} />
          ))} 
          {images.map((image, index) => (
            <Slide key={index + images.length} src={image} alt={`Slide ${index}`} /> //Duplicated images so that the transition is smoother 
          ))}
        </SlideshowInner>
      </SlideshowContainer>
    );
  };
  







  