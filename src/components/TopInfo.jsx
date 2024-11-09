import styled from "styled-components";

const TopInfoContainer = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  margin: 0 auto;
`;

const BodyText = styled.p`
  text-align: center;
  color: #545F71;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 28px;
  word-wrap: break-word;
  padding: 32px 0;
  margin: 0 auto;

`;

const H3 = styled.h3`
  width: 100%;
  height: 100%;
  text-align: center;
  color: #1C7D79;
  font-size: 36px;
  font-family: 'Schoolbell', cursive;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
  margin: 0 auto;
padding-bottom: 32px;
`;

export const TopInfo = () => {
  return (
    <TopInfoContainer>
      <BodyText>
        Många barnfamiljer kämpar ekonomiskt under vintern – stötta dem och bidra till en glädjefylld jul. Din gåva kan vara skillnaden mellan en tuff tid och en magisk högtid.
      </BodyText>
      <H3>
        Hjälp till och gör skillnad!
      </H3>
    </TopInfoContainer>
  );
};
