import styled from "styled-components";

//styles
//mobile & tablet are same, desktop bigger
//two colours - grey for yogis - black for happenings
export const ParagraphOne = styled.p`
  color: ${(props) =>
    props.grey ? "var(--primary-black)" : "var(--primary-grey)"};
  font-size: 14px;
  text-align: left;

  @media all and (min-width: 1024px) {
    font-size: 16px;
  }
`;
