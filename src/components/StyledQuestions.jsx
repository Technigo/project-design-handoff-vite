import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-default);
  align-items: center;
  margin: var(--gap-comfortable) 0;

  @media (min-width: 1025px) {
    padding: 0 var(--gap-huge);
  }
`;

export const QuestionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-comfortable);

  @media (min-width: 651px) {
    flex-direction: row;
  }
`;

export const QuestionImgContainer = styled.div``;
export const QuestionImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 15;
  object-fit: cover;

  @media (min-width: 651px) {
    height: 100%;
  }
`;

export const QuestionTextBox = styled.div`
  flex-direction: column;
  gap: var(--gap-comfortable);

  @media (min-width: 651px) {
    max-width: 50%;
  }
`;

export const QuestionSmallTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-default);
`;
