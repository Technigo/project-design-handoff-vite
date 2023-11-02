import styled from "styled-components";

const InfoContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #f26631 solid;
  border-bottom: 3px #f26631 solid;
  width: 100%;
  height: 100px;
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  span {
    color: #f26631;
  }

  p {
    padding: 5px 0;
  }
`;

export const Info = () => {
  return (
    <InfoContainer className="info">
      <span>About us</span>
      <p>Faq</p>
      <span>Contact us</span>
    </InfoContainer>
  );
};
