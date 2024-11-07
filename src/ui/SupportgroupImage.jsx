import PropTypes from 'prop-types'
import styled from 'styled-components'

const SupportgroupImageStyle = styled.img`
align-self: stretch;
width: 100%;
height: 100%;
object-fit: cover;
`

const SupportgroupImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 13.75rem;
width: 100%;
overflow: hidden;
`

export const SupportgroupImage = ({ supportgroupImage, alt }) => {
  return (
    <SupportgroupImageContainer>
      <SupportgroupImageStyle src={supportgroupImage} alt={alt} />
    </SupportgroupImageContainer>
  )
}

SupportgroupImage.propTypes = {
  alt: PropTypes.string.isRequired,
  supportgroupImage: PropTypes.string.isRequired,
}