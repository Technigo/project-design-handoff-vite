//import styled
import styled from "styled-components";

//import reusables
import { HeadingTwo } from "../reusables/HeadingTwo";
import { MembershipCard } from "../reusables/MembershipCard";

//styles
const MembershipSection = styled.section`
  background: none;

  @media all and (min-width: 744px) {
    background: var(--primary-white);
  }
`;

//component
export const Membership = () => {
  return (
    <MembershipSection>
      <HeadingTwo>Start your journey</HeadingTwo>

      <MembershipCard />
    </MembershipSection>
  );
};
