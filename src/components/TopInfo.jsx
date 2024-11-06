import styled from "styled-components";

const TopInfoContainer = styled.div`
  background: white; 
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px; 
  padding: 16px; 
`;  

const BodyText = styled.p`
  height: 118px;
  text-align: center;
  color: #545F71;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 28px;
  word-wrap: break-word;
`;

export const TopInfo = () => {
  return (
    <TopInfoContainer>
      <BodyText>
        Många barnfamiljer kämpar ekonomiskt under vintern – stötta dem och bidra till en glädjefylld jul. Din gåva kan vara skillnaden mellan en tuff tid och en magisk högtid.
      </BodyText>
    </TopInfoContainer>
    
  );
};
