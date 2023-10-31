import styled from "styled-components";

const InfoContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border-left: 3px #f26631 solid;
  border-bottom: 3px #f26631 solid;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Info = () => {
  return (
    <InfoContainer className="info">
      <p>ABOUT US</p>
      <p>FAQ</p>
      <p>CONTACT US</p>
    </InfoContainer>
  );
};
