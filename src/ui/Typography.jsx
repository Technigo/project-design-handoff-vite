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
`

const Typography4 = styled.p`
color: #000;
text-align: center;
font-family: "Josefin Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 300;
line-height: 130%; /* 1.95rem */
width: 16.0625rem;
height: 4.8125rem;
`;


export const Typography = ({ typography, level = 2, className }) => {
  // Use `Typography4` for level 4, otherwise dynamically select `h1`, `h2`, etc.
  const Tag = level === 1 ? Level1
    : level === 4 ? Typography4
      : `h${level}`; // Use `h2`, `h3` directly for levels 2 and 3
  return <Tag className={`typography typography${level} ${className}`}>{typography}</Tag>
};


