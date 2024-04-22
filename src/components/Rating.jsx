import { USP } from './USP'
import { StarsRating } from './StarsRating'
import styled from 'styled-components'

export const Rating = () => {
  const StyledRating = styled.div`
    display: flex;
    font-family: Optima;
    padding: 0px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 12px;

    gap: 56px;
    @media (min-width: 744px) and (max-width: 1440px) {
      padding: 0px 32px;
      gap: 40px;
      margin: 0 32px;
      // min-width: 744px;
    }
    @media (min-width: 1440px) {
      margin: 0 40px;
      display: flex;
      padding: 0px 40px;
      justify-content: center;
      align-items: center;
      gap: 56px;
      flex-direction: row;
      margin-top: 56px;
    }
  `
  return (
    <StyledRating>
      <USP
        type="champion"
        text="PROVISION OF COACHING SERVICES TO THE 2022 ICN BODYBUILDING COMPETITION
        NATIONAL CHAMPION"
      />
      <StarsRating />
      <USP
        type="deadlift"
        text=" SPEND THE LAST 10 YEARS COACHING AND TRANING OVER 500 WOMEN TO REACH
        THEIR FITNESS AND NUTRITIONAL GOALS"
      />
    </StyledRating>
  )
}
