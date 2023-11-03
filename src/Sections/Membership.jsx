import styled from "styled-components";

const MembershipWrapper = styled.section`
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
  padding: 10px 20px;
  background-color: var(--secondary);
  font-family: var(--font);
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight);
  line-height: var(--text-height-mobile);
  width: fit-content;
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

  return (
    <>
      {/* check if the screen size is larger than 834px to conditionally render the relevant content */}
      {isDesktop ? (
        <MembershipWrapper>
          <MembershipText>
            <MembershipTitle>Sign up for a membership to unlock your full potential</MembershipTitle>
            <MembershipSmallerText>get workout plans tailored to you</MembershipSmallerText>
            <MembershipSmallerText>unlimited access to library</MembershipSmallerText>
            <MembershipSmallerText>access to live trainers</MembershipSmallerText>
            <SignUpBtn type="button">SIGN UP FOR MEMBERSHIP</SignUpBtn>
          </MembershipText>
          <MembershipImage src="src/assets/images/membership.png" alt="a woman tying her shoe" />
        </MembershipWrapper>
        ) : (
        <ButtonWrapper>
          <SignUpBtn type="button">SIGN UP FOR MEMBERSHIP</SignUpBtn>
        </ButtonWrapper>
        )
      }
    </>
  )
}
