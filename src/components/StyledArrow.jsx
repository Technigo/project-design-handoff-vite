import styled from "styled-components";
import arrow from "../assets/arrow.svg";

export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-compact);
  margin: var(--gap-spacious) 0;

  @media (min-width: 651px) and (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export const ArrowIcon = styled(arrow)`
  width: 24px;
  height: 12.84px;
`;
