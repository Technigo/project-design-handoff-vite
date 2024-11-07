import styled from "styled-components";

{
  /* =====================================
     ========== VARIANTS ===========
     =====================================
     "original"  // No transform 
     "rotateY"  // Rotate on Y-axis
     "rotate"  // Rotate 180 degrees
     "rotateX"  // Rotate on X-axis
     ===================================== */
}


const DividerImage = styled.img`
  width: 100%; /* Full width of the container */
  margin: 1.5rem 1rem; /* Space above and below the divider */
  z-index: 1;
  transform: ${({ $variant }) =>
    $variant === "rotateY" ? "rotateY(180deg)" :
    $variant === "rotate" ? "rotate(180deg)" :
    $variant === "rotateX" ? "rotateX(180deg)" :
    "none"}; 
    // Apply transformation based on variant
`;

// export const Divider = () => {
//   return <DividerImage src="/assets/divider.svg" alt="Section Divider" />;
// };
export const Divider = ({ $variant = "original" }) => {
  return (
    <DividerImage
      src="/assets/divider.svg"
      alt="Section Divider"
      $variant={$variant}
    />
  );
};
