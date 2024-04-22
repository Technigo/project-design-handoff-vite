//import styled
import styled from "styled-components";

//import reusables
import { Button } from "./Button";

//styles
const CardSection = styled.section`
  display: flex;
  align-items: flex-start;
  width: 292px;
  padding: 31px 33px;
  background: var(--primary-white);
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CardTitle = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  font-size: 96px;
  color: var(--primary-white);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--primary-blk);
`;

const CardSubtitle = styled.h3`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 500;
  text-align: left;
  color: var(--primary-blk);
`;

const CardList = styled.li`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--primary-blk);
`;

const CardPrice = styled.h2`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color: var(--primary-blk);
`;

//component
export const MembershipCard = () => {
  return (
    <CardSection>
      <CardWrapper>
        <CardTitleWrapper>
          <CardTitle>3</CardTitle>
          <CardSubtitle>Yoga anytime</CardSubtitle>
        </CardTitleWrapper>
        <CardList>Unlimited acces to all yoga classes</CardList>
        <CardPrice>5499 SEK</CardPrice>
        <Button buy> Buy now</Button>
      </CardWrapper>
    </CardSection>
  );
};
