import styled from "styled-components";
import { H2, Label } from "../UI/Typography";

export const AchievementsCards = () => {
    return (
        <Container>

            <DashedLine /> {/* Add the dashed line here */}

            <H2>Vår Spridning</H2>
            <IconRow>
                <IconCard>
                    <IconImage src="../Images/samtalsgrupp-icon.png" alt="Samtalsgrupper" />
                    <Label>Samtalsgrupper</Label>
                </IconCard>
                <IconCard>
                    <IconImage src="../Images/volounter-icon.png" alt="Volontärer" />
                    <Label>Volontärer</Label>
                </IconCard>
                <IconCard>
                    <IconImage src="../Images/activity-icon.png" alt="Aktiviteter" />
                    <Label>Aktiviteter</Label>
                </IconCard>
            </IconRow>
        </Container>
    );
};

const DashedLine = styled.div`
    width: 270px;
    border-top: 2px dashed #333;
    margin: 20px ; 
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconRow = styled.div`
    display: flex;
    gap: 30px; /* Spacing between icons */
    margin-top: 20px;
    
`;

const IconCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        margin-top: 32px;
        margin-bottom: 48px;

`;

const IconImage = styled.img`
    width: 86px; 
    height: 83px;
    border-radius: 50%;
`;

export default AchievementsCards;
