import styled from "styled-components";
import { breakpoints } from "../utility/breakpoints";
import Button from "../utility/Button";

export function HeroSection() {
	return (
		<Hero>

			<Headline>
				Be with yourself at <Highlight>Oasis Welness Center</Highlight>
			</Headline>
			<Button >Check Availability</Button>

		</Hero>
	);
}

const Hero = styled.section`
  height: 624px;
  padding: 96px 128px;
  gap: 48px;
  background-image: url("/images/hero.img.jpeg");
  background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	position: relative;

	@media (max-width: ${breakpoints.mobile}) {
		padding: 64px 32px;
	}

	@media (max-width: ${breakpoints.tablet}) {
    padding: 64px;
  }
`;

const Headline = styled.h1`
  color: var(--yellow);
  font-size: 56px;
  line-height: 56px;
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
	text-align: center;
	align-self: stretch;
	margin-top: 30px;
`;

const Highlight = styled.span`
  color: var(--yellow-light);
`;

