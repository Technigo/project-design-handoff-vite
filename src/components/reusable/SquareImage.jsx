import styled from "styled-components";

const StyledSquareContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledTwoSquareContainer = styled(StyledSquareContainer)`
  width: 50vw;
  padding-bottom: 50%;
`;

export const SquareImage = ({ imgUrl, imgAlt, isTwoImages }) => {
  return (
    <>
      {isTwoImages ? (
        <StyledTwoSquareContainer>
          <img src={imgUrl} alt={imgAlt} />
        </StyledTwoSquareContainer>
      ) : (
        <StyledSquareContainer>
          <img src={imgUrl} alt={imgAlt} />
        </StyledSquareContainer>
      )}
    </>
  );
};
