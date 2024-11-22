import styled from 'styled-components';
import PropTypes from 'prop-types';

const CarouselCardStyles = styled.div`
display: flex;
width: 12.25rem;
height: 22.6rem;
flex-direction: column;
justify-content: flex-start;
background-color: #C1F0EF;
padding: 1rem 1rem 2rem 1rem;
`
export const CarouselCard = ({ children }) => {
    return (
        <CarouselCardStyles>
            {children}
        </CarouselCardStyles>
    )
}

CarouselCard.propTypes = {
    children: PropTypes.node.isRequired,
}