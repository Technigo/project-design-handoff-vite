import styled from "styled-components";

const DividerImage = styled.img`
  width: 100%; /* Full width of the container */
  margin: 1.5rem 1rem; /* Space above and below the divider */
  z-index: 1;
  transform: ${({ reversed }) =>
    reversed ? "rotate(180deg)" : "none"}; /* Rotate if reversed is true */
`;

// export const Divider = () => {
//   return <DividerImage src="/assets/divider.svg" alt="Section Divider" />;
// };
export const Divider = ({ reversed = false }) => {
  return (
    <DividerImage
      src="/assets/divider.svg"
      alt="Section Divider"
      reversed={reversed}
    />
  );
};
