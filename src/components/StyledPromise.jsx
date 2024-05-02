import styled from "styled-components";

export const PromiseBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--yellow);
  gap: var(--gap-spacious);
  padding: var(--gap-extra) 0;

  @media (min-width: 1025px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: var(--gap-big) var(--gap-huge);
    gap: 86px;
  }
`;

export const PromiseTextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  gap: var(--gap-default);
  justify-content: center;

  @media (min-width: 651px) {
    flex-direction: row;
    gap: var(--gap-comfortable);
    padding: 0 var(--gap-comfortable);
  }

  @media (min-width: 1025px) {
    flex-wrap: nowrap;
    padding: 0;
  }
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
  color: var(--blue);
  margin-right: 13px;
  text-transform: uppercase;

  @media (min-width: 1025px) {
    margin-right: 0;
  }
`;
