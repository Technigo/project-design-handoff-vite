/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import reusables
import { MembershipCard } from "./MembershipCard";

//create a styled wrapper for larger screens
const LargerScreenWrapper = styled.div`
  display: none;

  @media all and (min-width: 744px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LargerScreenCards = ({ cards }) => {
  return (
    <LargerScreenWrapper>
      {cards.map((card, index) => (
        <MembershipCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          listItems={card.listItems}
          price={card.price}
        />
      ))}
    </LargerScreenWrapper>
  );
};
