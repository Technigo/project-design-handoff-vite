import styled from "styled-components";

export const PromiseBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffcd64;
  gap: var(--gap-comfortable);
  padding: var(--gap-spacious) 0;
`;

export const PromiseTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  gap: var(--gap-default);
  justify-content: center;
`;

export const PromiseSmallTextBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const PromiseText = styled.div`
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.06em;

  color: #1c2996;
  margin-right: 13px;
`;
