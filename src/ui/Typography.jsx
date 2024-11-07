/* eslint-disable react/prop-types */
import styled from 'styled-components';


const Level1 = styled.h1` 
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

const Level2 = styled.h2`
color: #FFF;
text-align: center;
font-family: "Yeseva One";
font-size: 2.25rem;
font-style: normal;
font-weight: 400;
margin: 0;

`

const Level3 = styled.h3`
color: #000;
text-align: center;
font-family: "Yeseva One";
font-size: 1.5rem;
font-style: light;
font-weight: 400;
margin: 0;

`

const Typography4 = styled.p`
color: #000;
text-align: center;
font-family: "Josefin Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 300;
line-height: 1.95rem;
margin-bottom: 2.19rem; //added instead of the height 


   //Tablet
   @media (min-width: 768px) {
    font-size: 1.5rem; 
  }


 //Desktop styling
 @media (min-width: 1200px) {
    font-size: 2.25rem;
  }
`;

//Buttons typography
const Typography5 = styled.p`
color: #FFF;
text-align: center;
font-family: "Josefin Sans";
font-size: 1.5rem;
font-weight: 300;
line-height: 1.95rem;
`;

const Typography6 = styled.p`
color: #000;
text-align: center;
font-family: "Josefin Sans";
font-size: 1.125rem;
font-weight: 300;
line-height: 1.2375rem;
`;

export const Typography = ({ typography, level = 2, className }) => {
  // Use `Typography4`, 5 and 6 for level 4,5 and 6 otherwise dynamically select `h1`, `h2`, etc.
  const Tag = level === 1 ? Level1
    : level === 2 ? Level2
      : level === 3 ? Level3
        : level === 4 ? Typography4
          : level === 5 ? Typography5
            : level === 6 ? Typography6
              : `h${level}`; // Use `h2`, `h3` directly for levels 2 and 3
  return <Tag className={`typography typography${level} ${className}`}>{typography}</Tag>
};


