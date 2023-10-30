import styled from "styled-components";

const CopyrightText = styled.p`
  text-transform: uppercase;
`;

export const Copyright = () => {
  return (
    <CopyrightText>Copyright &copy; 2023 Saddle Up Yoga Studio</CopyrightText>
  );
};
