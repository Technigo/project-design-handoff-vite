import styled from 'styled-components';

// Define a styled component for the main text, "Text."
const Text = styled.p`
  font-weight: normal;
  color: white;
`;

//Styling for Accountability Deluxe
const StyledSpan1 = styled.span`
color: #FFF;
font-family: Metal Mania;
font-size: 24px;
font-style: normal;
font-weight: 400;
`;

//Styling for Clarity, Energy and Devotion
const StyledSpan2 = styled.span`
font-family: JetBrains Mono;
font-size: 16px;
font-style: normal;
font-weight: 400;
`;

export const NormalText = ({ text }) => {
  const splitText = text.split(' ');

  return (
    <Text>
      {splitText.map((word, index) => {
        if (word === 'ACCOUNTABILITY' || word === 'DELUXE.') {
          return (
            <StyledSpan1 key={index}>
              {word} {index < splitText.length - 1 ? ' ' : ''}
            </StyledSpan1>
          );
        }
        if (word === 'CLARITY' || word === 'ENERGY' || word === 'DEVOTION.') {
          return (
            <StyledSpan2 key={index}>
              {word} {index < splitText.length - 1 ? ' ' : ''}
            </StyledSpan2>
          );
        }
        return (
          <span key={index}>
            {word} {index < splitText.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </Text>
  );
};
