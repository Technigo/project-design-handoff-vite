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

  @media (min-width: 1054px) {
    padding: 30px 0;
    row-gap: 50px;
  }
`;

export const QuestionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-comfortable);

  @media (min-width: 651px) {
    flex-direction: row;
  }

  @media (min-width: 1054px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1054px;
  }
`;

export const QuestionImgContainer = styled.div``;
export const QuestionImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 15;
  object-fit: cover;
  object-position: 100% 0;

  @media (min-width: 651px) {
    height: 100%;
  }
`;

export const QuestionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-comfortable);
`;

export const QuestionSmallTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-default);
`;
