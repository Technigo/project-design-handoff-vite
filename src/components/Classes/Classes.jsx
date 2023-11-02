import styled from "styled-components";

const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 52px;
  gap: 64px;
  max-width: 400px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  /* .allign:hover {
    background-image: url("/pb-allign.png");
    width: 100%;
    height: auto;
    object-fit: cover;
  } */
`;

export const Classes = () => {
  return (
    <ClassesContainer>
      <img src="/pb-allign1.png" className="allign" alt="Prima Barre Allign" />
      <img src="/pb-define1.png" className="define" alt="Prima Barre Define" />
      <img
        src="/pb-empower1.png"
        className="empower"
        alt="Prima Barre Empower"
      />
      <img
        src="/pb-classic1.png"
        className="classic"
        alt="Prima Barre Classic"
      />
    </ClassesContainer>
  );
};
