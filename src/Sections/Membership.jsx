import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MembershipWrapper = styled.section`
  margin: 35px 0;
  display: flex;
  flex-direction: row;
  gap: 55px;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SignUpBtn = styled.button`
  border-radius: var(--large-radius);
  border: none;
  padding: 10px 20px;
  background-color: var(--secondary);
  font-family: var(--font);
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight);
  line-height: var(--text-height-mobile);
  width: fit-content;

  @media (min-width: 835px) {
    &:hover {
    background-color: var(--hover);
    color: #FFFFFF;
    }
  }
`

const MembershipText = styled.div`
  display: grid;
  grid-template-column: repeat(2, 1fr);
  //need to make sure that the columns always have equal width???
`

const MembershipImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--medium-radius);
  object-fit: cover;
`

const MembershipTitle = styled.h1`
  font-size: var(--heading-size-tablet);
  font-weight: var(--heading-weight);
  line-height: var(--heading-height-tablet);
`

const MembershipSmallerText = styled.h2`
  font-size: var(--heading-size-mobile);
  font-weight: 300;
  line-height: var(--heading-height-mobile);
`

export const Membership = () => {
  const isDesktop = window.innerWidth > 834;

  const { t } = useTranslation();

  return (
    <>
      {/* check if the screen size is larger than 834px to conditionally render the relevant content */}
      {isDesktop ? (
        <MembershipWrapper>
          <MembershipText>
            <MembershipTitle>{t("membership.title")}</MembershipTitle>
            <MembershipSmallerText>{t("membership.text-1")}</MembershipSmallerText>
            <MembershipSmallerText>{t("membership.text-2")}</MembershipSmallerText>
            <MembershipSmallerText>{t("membership.text-3")}</MembershipSmallerText>
            <SignUpBtn type="button">{t("membership.button")}</SignUpBtn>
          </MembershipText>
          <MembershipImage src="./images/membership.png" alt={t("membership.image-alt")} />
        </MembershipWrapper>
        ) : (
        <ButtonWrapper>
          <SignUpBtn type="button">{t("membership.button")}</SignUpBtn>
        </ButtonWrapper>
        )
      }
    </>
  )
}
