import styled from "styled-components";

const TrustSection = styled.section`
  padding: 40px;
  background: #f9f9f9;
  text-align: center;
`;

const TrustText = styled.p`
  font-size: 1.2em;
`;

export function TrustIndicator() {
  return (
    <TrustSection>
      <TrustText>"Best retreat I've ever been to!" - Happy Customer</TrustText>
      <TrustText>"5-Star Rating on All Review Platforms"</TrustText>
    </TrustSection>
  );
}
