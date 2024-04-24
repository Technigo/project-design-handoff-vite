import styled from "styled-components";
import arrow from "../assets/arrow.svg";

export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-compact);
  margin: var(--gap-spacious) 0;
`;

export const ArrowIcon = styled(arrow)`
  width: 24px;
  height: 12.84px;
`;
