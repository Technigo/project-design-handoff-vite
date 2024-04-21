import styled from 'styled-components'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`

const Icon = styled.img`
  width: 36px;
  aspect-ratio: 1/1;
  cursor: pointer;

  @media all and (min-width: 1024px) {
    width: 56px;
    &:hover {
    }
  }
`

export const Social = () => {
  return (
    <SocialContainer>
      <a href="#" aria-label="facebook link">
        <Icon src={facebook} alt="" />
      </a>
      <a href="#" aria-label="instagram link">
        <Icon src={instagram} alt="" />
      </a>
      <a href="#" aria-label="linkedin link">
        <Icon src={linkedin} alt="" />
      </a>
    </SocialContainer>
  )
}
