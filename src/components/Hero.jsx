import styled from "styled-components";
import { Button } from "./Button";

// Sets styling for the Hero section of the landing page using styled-components. The section that the hero image lives in is getting named HeroContainer.
const HeroContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 31px;
            padding: 55px 13px;
            text-align: center;
        }
    @media (min-width: 834px) {
        .hero-content {
            position: absolute;
            top: 50%;
        }
    }
`;

export const Hero = () => {
    return (
        <HeroContainer>
            <img src="./assets/images/align-yoga-hero-image.jpg" alt="Hero" />
            <article className="hero-content">
                <h1>Discover your inner strength</h1>
                <p>Get ready to challenge yourself both mentally and physically.</p>
                <Button className={"green"} text={"Become a member"} />
            </article>
        </HeroContainer>
    )
}
