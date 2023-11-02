import styled from "styled-components";

const ClassesTextContainer = styled.div`
  max-width: 500px;
  padding: 16px;
  border-top: 3px solid #f26631;
  border-bottom: 3px solid #f26631;
  background-color: #f1f1f1;
  text-align: center;
  h2 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const ClassesText = () => {
  return (
    <ClassesTextContainer>
      <h2>Our Barre Classes</h2>
      <p>
        Prima Barre offers four group classes with unique full-body workouts
        focused on low-impact, high-intensity movements that lift and tone
        muscles and improve strength, agility, and flexibility for everybody.
      </p>
    </ClassesTextContainer>
  );
};
