import styled from "styled-components";

const StyledSection = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(92, 22, 7, 0.15) 37%,
      rgba(51, 13, 3, 0.74) 88.29%,
      #220901 100%
    ),
    url("/images/welcome-img.jpeg");
  height: 592px;
  background-size: cover;
  background-position: 50%;
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end; 

  .wrapper-text {
    display: flex; 
    flex-direction: column; 
    gap: 32px; 
    padding: 24px; 
  }


  h1 {
    color: var(--white-red);
    font-size: 32px;
  }

`;

export const Welcome = () => {
  return (
    <>
      <StyledSection>
        <div className="wrapper-text">
        <h1> Welcome to PREGGOYOGASTUDION</h1>

        

        <p>
          Preggoyogastudion is a universe, a home, a safe place for pregnant and
          birthing women.
        </p>

        <p>
          We aim to be your go-to partner and guide during your most blessed and
          glorified yet challenged journey.
        </p>

        </div>
     
      </StyledSection>
    </>
  );
};
