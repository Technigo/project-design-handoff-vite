// NormalText.js
import styled from 'styled-components';

const Text = styled.p`
  font-weight: normal;
  color: white;
`;

const StyledSpan1 = styled.span`
color: #FFF;
font-family: Metal Mania;
font-size: 24px;
font-style: normal;
font-weight: 400;
`;

const StyledSpan2 = styled.span`
font-family: JetBrains Mono;
font-size: 16px;
font-style: normal;
font-weight: 400;
`;

const LineBreak = styled.br;

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
