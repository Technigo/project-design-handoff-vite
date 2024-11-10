/* eslint-disable react/prop-types */
import styled from "styled-components"


const Card = styled.article`
  display: flex;
  width: 330px;
	height: 110px;
	padding: 16px;
	justify-content: center;
	align-items: center;
  scroll-snap-align: start;
  cursor: pointer; 
  transition: transform 0.2s;
	border-radius: 16px;
	background: #EEE7EB;
	z-index: 1;

`;

const P = styled.p`
	color: #000;
	text-align: center;
	font-family: "Josefin Sans";
	font-size: 16px;
	font-style: italic;
	font-weight: 400;
	line-height: 150%; /* 24px */
`;

export const CarouselCard = ({ text }) => {

	return (
		<Card>
			<P>{text}</P>
		</Card>
	);
};