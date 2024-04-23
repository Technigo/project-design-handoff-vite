import styled from "styled-components"

export const TrustIndicators = () => {
  return (
    <StyledTrustIndicators>
      <TrustNumber>
        <TrustHeading>4.9</TrustHeading>
        <TrustText>
          rating at <br /> google
        </TrustText>
      </TrustNumber>
      <TrustNumber>
        <TrustHeading>+3.500</TrustHeading>
        <TrustText>
          motivated <br /> members
        </TrustText>
      </TrustNumber>
      <TrustNumber>
        <TrustHeading>72</TrustHeading>
        <TrustText>
          exclusive clubs <br /> world-wide
        </TrustText>
      </TrustNumber>
    </StyledTrustIndicators>
  )
}

const TrustNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1494px) {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
`
const StyledTrustIndicators = styled.div`
  grid-column: span 4;
  padding: 80px 0;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: var(--black);
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    gap: 128px;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    gap: 96px;
  }
`
const TrustHeading = styled.h2`
  font-size: 24px;
  text-align: center;
  letter-spacing: normal;

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 48px;
  }

  @media (min-width: 1494px) {
    font-size: 56px;
  }
`

const TrustText = styled.p`
  text-align: center;

  @media (min-width: 1494px) {
    text-align: left;
  }
`