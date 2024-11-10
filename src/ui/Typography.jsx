/* eslint-disable react/prop-types */
import styled from 'styled-components';


const Level1 = styled.h1` //H1 styling
color: #000;
text-align: center;
font-family: "Yeseva One";
font-size: 3rem;
font-style: normal;
font-weight: 400;
margin: 0;

   //Desktop styling
   @media (min-width: 1200px) {
    font-size: 6rem;
  
  }
`

const Level2 = styled.h2` //H2 styling
color: #FFF;
text-align: center;
font-family: "Yeseva One";
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
margin: 0;

 // Tablet styling
 @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  // Desktop styling
  @media (min-width: 1200px) {
    font-size: 4rem;
    text-align: left;
  }

`

const Level3 = styled.h3` //Heading pop-up
color: #000;
font-family: "Yeseva One";
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;


`

const Typography4 = styled.p`//Suheading 1 och 2, "unlock the magic" "in need of a temporary spell"
color: #000;
text-align: center;
font-family: "Josefin Sans";
font-size: 1.5rem;
font-weight: 300;
line-height: 1.95rem;
margin-bottom: 2.19rem; 


   //Tablet
   @media (min-width: 768px) {
    font-size: 1.5rem; 
  }


 //Desktop styling
 @media (min-width: 1200px) {
    font-size: 2.25rem;
    text-align: left;
  }
`;


const Typography5 = styled.p`//Buttons typography
color: #FFF;
text-align: center;
font-family: "Josefin Sans";
font-size: 1.5rem;
font-weight: 400;
line-height: 1.95rem;
`;

export const Typography6 = styled.p` //Quotes typography, exported this to be able to use white color
color: ${(props) => (props.isWhite ? '#fff' : '#000')}; // default black - choise to be white
text-align: ${(props) => (props.isCentered ? 'left' : 'center')};
font-family: "Josefin Sans";
font-size: 0.75rem;
font-style: ${(props) => (props.noItalic ? 'normal' : 'italic')};
font-weight: 300;
line-height: 1.1rem; 

  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem; 
  }

`;

const Typography7 = styled.p`  //Footer 
color: #FFF;
font-family: "Josefin Sans";
font-size: 0.75rem;
font-style: normal;
font-weight: 300;
line-height: 0.825rem;
`;

export const Typography = ({ typography, level = 2, className }) => {
  // Use `Typography4`, 5, 6 and 7 otherwise dynamically select `h1`, `h2`, etc.
  const Tag = level === 1 ? Level1
    : level === 2 ? Level2
      : level === 3 ? Level3
        : level === 4 ? Typography4
          : level === 5 ? Typography5
            : level === 6 ? Typography6
              : level === 7 ? Typography7
                : `h${level}`; // Use `h2`, `h3` directly for levels 2 and 3
  return <Tag className={`typography typography${level} ${className}`}>{typography}</Tag>
};

