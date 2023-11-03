import styled from "styled-components";

const HeroWrapper = styled.section`
  margin: 35px 0;
  background-color: var(--hover);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0;
  border-radius: var(--large-radius);
  width: 100%;
`

const HeroImage = styled.img`
  margin: 0;
  width: 66.66%;
`

const HeroTextDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.34%;
  color: #F2ECE4;
`

const HeroTextTablet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #525B64;
  color: #F2ECE4;
  padding-top: 30px;
  padding-bottom: 30px;
`
const HeroTitle = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: var(--heading-weight);
  font-size: var(--heading-size-tablet);
  line-height: var(--heading-height-tablet);
`

const HeroMotto = styled.h4`
  margin-block-start: 0;
  margin-block-end: 0;
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-size-mobile);
  line-height: var(--text-height-mobile);
`

export const HeroSection = () => {
  const isDesktop = window.innerWidth > 834;

  return (
    // conditionally display either text or both image and text depending on the screen size
    <>
      {isDesktop ? ( 
        <HeroWrapper>
          <HeroImage src="./images/hero-image.png" alt="a woman stretching her leg" />
          <HeroTextDesktop className="hero-text">
            <HeroTitle>AT HOME FITNESS</HeroTitle>
            <HeroMotto>Helping you move in your comfort zone</HeroMotto>
          </HeroTextDesktop>
        </HeroWrapper> 
      ) : (
        <HeroTextTablet className="hero-text">
          <HeroTitle>AT HOME FITNESS</HeroTitle>
          <HeroMotto>Helping you move in your comfort zone</HeroMotto>
        </HeroTextTablet>
      )}      
    </>
  )
}
