import styled from "styled-components";

// Sets styling for the Hero section of the landing page using styled-components. The section that the hero image lives in is getting named HeroContainer.
const HeroContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Hero = () => {
    return (
        <HeroContainer>
            <img src="https://via.placeholder.com/1500x300" alt="Hero" />
        </HeroContainer>
    )
}
