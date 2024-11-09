import { Button } from "../../re-components/Button"
import { Button2 } from "../../re-components/Button2";
import { Button3 } from "../../re-components/Button3";
import weblinks from "../../data/links.json"
import { FinePrintFooter } from "../../re-components/Typography";
import styled from "styled-components";

// Define the styled-components directly in SocialLinks

const StartTodayContainer = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
padding-top: ${({ theme }) => theme.spacing.small};
padding-left: ${({ theme }) => theme.spacing.xsmall};
display: flex;
width: 100%;
align-items: center;
gap: 1rem;
box-sizing: border-box;

margin: 1,5rem, 1rem, 0.5rem, 1rem;

/* display: flex;
padding: var(--T-Margin, 1.5rem) var(--lr-margin, 1rem) var(--B-Margin, 0.5rem) var(--lr-margin, 1rem);
align-items: center;
gap: 1rem;
align-self: stretch; */


`;

const LinkButtonsContainer = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
padding-bottom: ${({ theme }) => theme.spacing.xxsmall};
padding-top: ${({ theme }) => theme.spacing.xxsmall};
padding-left: ${({ theme }) => theme.spacing.xsmall};
display: flex;
width: 100%;
height: auto;
flex-direction: column;
align-items: flex-start;
box-sizing: border-box;
`;

const SocialLinksContainer = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
display: flex;
/* padding-left: 1rem; */
align-items: center;
gap: var(--Gutter, 2rem);
align-self: stretch;
`;


// Define button styles for individual buttons
const ButtonStyle1 = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.highlight};

  display: flex;
  width: 21.375rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;

  display: flex;
width: var(--Breakpoint, 24.375rem);
padding: var(--T-Margin, 1.5rem) var(--lr-margin, 1rem) var(--B-Margin, 0.5rem) var(--lr-margin, 1rem);
flex-direction: column;
align-items: flex-start;
gap: 0.625rem;
`;

const ButtonStyle2 = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const ButtonStyle3 = styled.div`
display: flex;
padding-left: 1rem;
align-items: center;
gap: var(--Gutter, 2rem);
align-self: stretch;
`;


export const StartTodayButton = ({ showFinePrint = true}) => {
  return (
    <>
      {/* Render StartTodayContainer for _id === "1" */}
      <StartTodayContainer>
        {weblinks.weblinks
          .filter((item) => item._id === "1")
          .map((item) => (
            <ButtonStyle1 key={item._id}>
              <Button
                text={item.text}
                icon={item.icon}
                link={item.link}
              />
              {showFinePrint && (
                <FinePrintFooter>No cost, just kindness*</FinePrintFooter>
              )}
            </ButtonStyle1>
          ))}
      </StartTodayContainer>
    </>
  )
}

export const SocialLinks = () => {
  return (
    <>
      {/* Render LinkButtonsContainer for _id "2", "3", and "4" */}
      <LinkButtonsContainer>
        {weblinks.weblinks
          .filter((item) => ["2", "3", "4"].includes(item._id))
          .map((item) => (
            <ButtonStyle2 key={item._id}>
              <Button2
                text={item.text}
                link={item.link}
              />
            </ButtonStyle2>
          ))}
      </LinkButtonsContainer>

      {/* Render SocialLinksContainer for _id "5", "6", and "7" */}
      <SocialLinksContainer>
        {weblinks.weblinks
          .filter((item) => ["5", "6", "7"].includes(item._id))
          .map((item) => (
            <ButtonStyle3 key={item._id}>
              <Button3
                icon={item.icon}
                link={item.link}
              />
            </ButtonStyle3>
          ))}
      </SocialLinksContainer>
    </>
  );
};
