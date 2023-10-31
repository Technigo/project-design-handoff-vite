import styled from "styled-components";

const CopyrightText = styled.p`
  text-align: center;
  font-size: 12px;
  //font-style: normal;
  font-weight: 400;
  //line-height: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  strong {
    font-weight: 800;
  }
`;

export const Copyright = () => {
  return (
    <CopyrightText>
      Copyright &copy; 2023 <strong>Saddle Up</strong> Yoga Studio
    </CopyrightText>
  );
};
