import styled from "styled-components"


const QuotesCard = styled.div`
display: flex;
width: 20.625rem;
height: 6.875rem;
padding: 1rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 1rem;
background: #EEE7EB;
`

export const Quotes = ({ quote }) => {
  return (
    <QuotesCard>
      <p>{quote}</p>
    </QuotesCard>

  );
};

