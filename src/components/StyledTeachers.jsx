import styled from "styled-components";

export const TeacherTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: var(--gap-medium);
`;

export const StyledTeacherOne = styled.img`
  width: 100%;
  aspect-ratio: 16 / 18.5;
  object-fit: cover;
  overflow: hidden;
`;

export const StyledTeacherTwo = styled.img`
  width: 100%;
  aspect-ratio: 16 / 17.3;
  object-fit: cover;
  overflow: hidden;
`;

export const TeacherBox = styled.div`
  display: flex;
  gap: var(--gap-extra);
  margin: var(--gap-extra) 0;
  max-width: 1050px;
  justify-self: center;
`;

export const TeacherBoxOne = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: ${(props) => props.$gap || "var(--gap-default)"};
`;
