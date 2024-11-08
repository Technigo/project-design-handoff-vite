import { Button } from "../../re-components/Button"
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
`;

const LinkButtonsContainer = styled.div`
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

`;

const ButtonStyle2 = styled.div`

`;

const ButtonStyle3 = styled.div`

`;

export const SocialLinks = () => {
  return (
    <>
      {weblinks.weblinks.map((item) => {
        
        // Declare ButtonWrapper variable
        let ButtonWrapper;

        if (item._id === "1") {
          ButtonWrapper = ButtonStyle1; // Style for ID 1
        } else if (["2", "3", "4"].includes(item._id)) {
          ButtonWrapper = ButtonStyle2; // Style for IDs 2, 3, and 4
        } else if (["5", "6", "7"].includes(item._id)) {
          ButtonWrapper = ButtonStyle3; // Style for IDs 5, 6, and 7
        }
        
        //wraps -id 1 into a container (StartTodayContainer)
        if (item.id === "1") {
          return (
            <StartTodayContainer key={item._id}>
              <ButtonWrapper>
                <Button
                  text={item.text}
                  icon={item.icon}
                  link={item.link}
                />
                {/* Conditionally render <FinePrint> tag only for _id 1 */}
                <FinePrint>No cost, just kindness*</FinePrint>
              </ButtonWrapper>
            </StartTodayContainer>
          );
        }

        // Wrap IDs 2, 3, and 4 in LinkButtonsContainer
        if (["2", "3", "4"].includes(item._id)) {
          return (
            <LinkButtonsContainer key={item._id}>
              <ButtonWrapper>
                <Button
                  text={item.text}
                  icon={item.icon}
                  link={item.link}
                />
              </ButtonWrapper>
            </LinkButtonsContainer>
          );
        }

        // Wrap IDs 5, 6, and 7 in SocialLinksContainer
        if (["5", "6", "7"].includes(item._id)) {
          return (
            <SocialLinksContainer key={item._id}>
              <ButtonWrapper>
                <Button
                  icon={item.icon}
                  link={item.link}
                />
              </ButtonWrapper>
            </SocialLinksContainer>
          );
        }
        
        // The return null; at the end of the map callback function ensures that if an item doesn’t match any of the specified _id groups (1, 2, 3, 4, or 5, 6, 7), it won’t render anything for that particular item. It essentially means, "don’t render anything if none of the conditions are met."
        //In this code, it’s a safety measure to handle unexpected data. It tells React to skip rendering if an item with an unexpected _id is present in weblinks["web-links"], avoiding potential errors or unintended output.
        return null;
        
      })}   
    </>
  );
};