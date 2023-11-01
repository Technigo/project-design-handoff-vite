import styled from "styled-components";

export const Quote = () => {
  const QuoteWrapper = styled.section`
    background-color: var(--cobalt);
  `;

  const QuoteContainer = styled.div`
    padding: 1.5rem 2rem;
  `;

  const QuoteP = styled.p`
    text-align: center;
    font-weight: 700;
    line-height: 2rem;
  `;

  return (
    <QuoteWrapper>
      <QuoteContainer>
        <QuoteP>
          ARE YOU LONGING FOR MORE? <br /> With a daily sacred morning <br />{" "}
          practice you can connect <br /> to your inner well of creativity,{" "}
          <br />
          energy and with that focus <br /> BUILD YOUR VISIONS!
        </QuoteP>
      </QuoteContainer>
    </QuoteWrapper>
  );
};
