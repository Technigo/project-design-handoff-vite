import styled from "styled-components";
import { HeadingTwo } from "../reusables/HeadingTwo";
import { MobileCarousel } from "../reusables/MobileCarousel";
import { LargerScreenCards } from "../reusables/LargerScreenCards";

//membership data
const membershipData = [
  {
    title: "1",
    subtitle: "Yoga Drop-in",
    listItems: ["Free yoga mat and towel is included"],
    price: "250 SEK",
  },
  {
    title: "2",
    subtitle: "Yoga Intro",
    listItems: ["Unlimited yoga for 14 days", "Only for new members"],
    price: "499 SEK",
  },
  {
    title: "3",
    subtitle: "Yoga Anytime",
    listItems: ["Unlimited access to all yoga classes"],
    price: "5499 SEK",
  },
];

//styling
const MembershipSection = styled.section`
  background: none;
  padding: 68px 16px 84px 16px;

  @media all and (min-width: 744px) {
    background: var(--primary-white);
  }
`;

//component
export const Membership = () => {
  return (
    <MembershipSection>
      <HeadingTwo>Start your journey</HeadingTwo>
      {/* Render the MobileCarousel for smaller screens */}
      <MobileCarousel cards={membershipData} />
      {/* Render the LargerScreenCards for larger screens */}
      <LargerScreenCards cards={membershipData} />
    </MembershipSection>
  );
};
