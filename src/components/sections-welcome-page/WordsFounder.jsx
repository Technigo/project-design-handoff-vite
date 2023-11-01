import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 78px;
  justify-content: center;
  align-items: center;
  height: 782px;
  margin: 0 24px; 

  .image-founder {
    height: 260px;
    width: 260px;
    border-radius: 260px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 30% 50%;
  }

  .image-founder::after {
    display: block;
    position: relative;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(34, 9, 1, 0.7) 16.67%,
      rgba(184, 56, 8, 0) 75.98%,
      #220901 100%);
    width: 100%;
    content: "";
  }

  .founder-text {
    display: flex; 
    flex-direction: column; 
    gap: 16px; 
  }

  .paragraph-small {
    color: var(--white-red)
  }
`;

const headerText = "WORDS FROM OUR FOUNDER";
const bodyText =
  "“The female body is engineered for pregnancy and birth through its entire hormonal  system. It is physically as natural for us as breathing, however our modern world is not supporting it. Scientists know that, but there is simply not any finance in creating an optimal environment. Therefor I  founded Preggoyogastudion, to a the home for women seeking to understand their bodies and minds.”";

export const WordsFounder = () => {
  return (
    <>
      <StyledSection>
        <div className="image-founder">
          <img
            src="/images/image-founder.png"
            alt="image of the founder in yoga clothes"
          />
        </div>

        <div className="founder-text">
          <p className="paragraph-small">{headerText}</p>
          <p className="paragraph-small">{bodyText}</p>
        </div>
      </StyledSection>
    </>
  );
};
