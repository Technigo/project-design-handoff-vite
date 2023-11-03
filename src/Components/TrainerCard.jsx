import styled from "styled-components"

const IndividCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 133px;
  
  position: relative;

  @media (min-width: 394px) {
    width: 186.49px;
    height: 255px;
  }

  @media (min-width: 835px) {
    width: 300.25px;
    height: 422px;
  }
`

const TrainerImage = styled.img`
  width: 100%; 
  height: 204px;
  border-radius: var(--small-radius);

  @media (min-width: 394px) {
    height: 213px;
  }
  @media (min-width: 835px) {
    height: 377px;
  }
`

const HeartWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: right;
`

const HeartBtn = styled.button`
  padding: 10px;
  border: none;
  background: transparent;
`

const TrainerName = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 18.17px;
  text-align: center;

  @media (min-width: 835px) {
    font-size: var(--text-size-mobile);
    font-height: var(--text-height-mobile);
  }
`

export const TrainerCard = ({ trainer }) => {
  return (
    <IndividCard>
      <HeartWrapper>
        <HeartBtn type="button">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="heart">
              <path 
                id="Icon" 
                d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
                stroke="#545F71" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </HeartBtn>
      </HeartWrapper>
      <TrainerImage src={trainer.image} alt={trainer.name} />
      <TrainerName>{trainer.name.toUpperCase()}</TrainerName>
    </IndividCard>
  )
}
