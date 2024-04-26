import styled from 'styled-components'

export const Description = () => {
  return (
    <StyledDescription>
      <DescriptionText $border>
        <h3>Get Unlimited Access to Classes</h3>
        <p>
          Choose from 200+ Classes and meditations, to be taken at your own
          pace, and on any device.
        </p>
      </DescriptionText>
      <DescriptionText $border>
        <h3>Creat Life Changing Transformation</h3>
        <p>
          Commit to a regular practice and create positive changes in your life,
          feel light, bright and radiant as you live to your full potential.
        </p>
      </DescriptionText>
      <DescriptionText>
        <h3>Become Your Healthiest self</h3>
        <p>
          Develop strenght and flexability, regulate the nerv system, creat
          better digestion, and reduce stress and anxiety.
        </p>
      </DescriptionText>
    </StyledDescription>
  )
}

//Styled components

const StyledDescription = styled.section`
  background-color: #3e4c65;
  padding: 0 89px 20px 89px;
  display: flex;
  flex-direction: column;
  color: white;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 20px 89px;
    height: 330px;
  }`;
  
const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  border-bottom: ${({ $border }) => ($border ? 'solid 1px #FFFFFF80' : 'none')};
  //I changed the color to be 50% transparent as in her design ;)

  @media screen and (min-width: 834px) {
    border-bottom: none;
    border-right: ${({ $border }) =>
      $border ? "solid 1px #FFFFFF80" : "none"};
    padding: 0 20px 0 0;
    margin: 20px 0;
    width: 188px;
  }

  @media screen and (min-width: 1440px) {
    width: 278px;
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`
