import styled from "styled-components";

export const BodyLarge = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.24px;
`;

export const BodyXSmall = (bold) => styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: ${bold ? 700 : 400};
  line-height: 115%;
  letter-spacing: 0.2px;
`;

export const FinePrint = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.18px;
`;
