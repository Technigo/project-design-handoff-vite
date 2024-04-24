//import styled
import styled from "styled-components";

//import reusables
import { Button } from "./Button";
import { ButtonSmall } from "./ButtonSmall";

//import hooks
import { useState, useEffect } from "react";

//styles
const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "num sub sub"
    "li li li"
    "prc prc prc"
    "btn btn btn";
  width: 292px;
  height: 405px;
  padding: 31px 33px;
  background: var(--primary-white);
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  @media all and (min-width: 744px) {
    grid-template-areas:
      "num num num"
      "sub sub sub"
      "li li li"
      "prc prc prc"
      "btn btn btn";
    width: 202px;
    height: 100%;
    padding: 0;
    box-shadow: none;
  }
`;

const CardTitle = styled.h1`
  grid-area: num;
  font-weight: 500;
  font-size: 96px;
  justify-self: end;
  color: var(--primary-white);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--primary-blk);

  @media all and (min-width: 744px) {
    justify-self: center;
  }
`;

const CardSubtitle = styled.h3`
  grid-area: sub;
  font-size: 30px;
  align-self: center;
  color: var(--primary-blk);

  @media all and (min-width: 744px) {
    text-align: center;
  }
`;

const CardList = styled.li`
  grid-area: li;
  font-size: 16px;
  text-align: center;
  color: var(--primary-blk);
`;

const CardPrice = styled.h2`
  grid-area: prc;
  font-size: 40px;
  text-align: center;
  color: var(--primary-blk);
`;

const ButtonWrapper = styled.div`
  grid-area: btn;
  justify-self: center;
`;

//component
export const MembershipCard = () => {
  //state to track if the screen size is tablet
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 744 && width <= 1024);
    };

    //resize event listener
    window.addEventListener("resize", handleResize);

    handleResize(); //inital check to set the correct state

    //clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //choose button based on screen size
  const UseButton = isTablet ? ButtonSmall : Button;

  return (
    <CardSection>
      <CardTitle>3</CardTitle>
      <CardSubtitle>Yoga anytime</CardSubtitle>
      <CardList>Unlimited acces to all yoga classes</CardList>
      <CardPrice>5499 SEK</CardPrice>
      <ButtonWrapper>
        <UseButton>Buy now</UseButton>
      </ButtonWrapper>
    </CardSection>
  );
};
