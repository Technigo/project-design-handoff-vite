/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import reusables
import { Button } from "./Button";
import { ButtonSmall } from "./ButtonSmall";

//import hooks
import { useState, useEffect } from "react";

//styles

const CardContainer = styled.div`
  display: flex;
  border: none;
  @media all and (min-width: 744px) {
    border-right: 1px solid var(--primary-blk);
    width: 100%;
  }

  &:last-child {
    border-right: none; /* Remove border for the last child */
  }
`;
const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "num sub sub"
    "li li li"
    "prc prc prc"
    "btn btn btn";
  width: 300px;
  height: 405px;
  padding: 31px 33px;
  background: var(--primary-white);
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  align-content: space-between;

  @media all and (min-width: 744px) {
    grid-template-areas:
      "num num num"
      "sub sub sub"
      "li li li"
      "prc prc prc"
      "btn btn btn";
    width: 100%;
    height: 100%;
    padding: 10px;
    align-items: stretch;
    box-shadow: none;
  }

  @media all and (min-width: 1024px) {
    align-items: center;
  }
`;

const CardTitle = styled.h2`
  grid-area: num;
  font-weight: 500;
  font-size: 96px;
  justify-self: center;
  color: var(--primary-white);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--primary-blk);

  &:hover {
    cursor: pointer;
    color: var(--primary-prpl);
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

const CardList = styled.div`
  grid-area: li;
  font-size: 16px;
  color: var(--primary-blk);
  text-align: center;

  @media all and (min-width: 744px) {
    text-align: center;
    padding: 16px;
  }

  ul {
    padding: 0 16px;

    @media all and (min-width: 744px) {
      padding: 0;
      list-style-position: inside;
      display: flex;
      flex-direction: column;
    }
  }
`;

const CardPrice = styled.h4`
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
export const MembershipCard = ({ title, subtitle, listItems, price }) => {
  //state to track if the screen size is tablet
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 744);
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
    <CardContainer>
      <CardSection>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>

        <CardList>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardList>

        <CardPrice>{price}</CardPrice>
        <ButtonWrapper>
          <UseButton buy>Buy now</UseButton>
        </ButtonWrapper>
      </CardSection>
    </CardContainer>
  );
};
