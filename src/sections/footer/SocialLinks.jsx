import { Button } from "../../re-components/Button"
import { Button2 } from "../../re-components/Button2";
import { Button3 } from "../../re-components/Button3";
import weblinks from "../../data/links.json"
import { FinePrint } from "../../re-components/Typography";
import styled from "styled-components";

// Define the styled-components directly in SocialLinks

const StartTodayContainer = styled.div`
display: flex;
width: 24.375rem;
padding: var(--Text-Fine-print, 1.5rem) var(--Gutter, 2rem) 0.5rem 1rem;
align-items: center;
gap: 1rem;
background-color: black;
`;

const LinkButtonsContainer = styled.div`
background-color: ${({ theme }) => theme.backgrounds.highlight};
padding-bottom: ${({ theme }) => theme.spacing.xxsmall};
padding-top: ${({ theme }) => theme.spacing.xxsmall};
display: flex;
width: 24.375rem;
padding: 0rem 1rem;
flex-direction: column;
align-items: flex-start;
`;

const SocialLinksContainer = styled.div`
display: flex;
padding-left: 1rem;
align-items: center;
gap: var(--Gutter, 2rem);
align-self: stretch;
`;


// Define button styles for individual buttons
const ButtonStyle1 = styled.div`
  padding: 10px;
  background-color: lightblue;
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


export const SocialLinks = () => {
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
              <FinePrint>No cost, just kindness*</FinePrint>
            </ButtonStyle1>
          ))}
      </StartTodayContainer>

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
