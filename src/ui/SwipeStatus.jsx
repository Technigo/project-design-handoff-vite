import styled from 'styled-components';
import PropTypes from 'prop-types';

const SwipeStatusStyle = styled.div`
  grid-column: span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`
const Circle = styled.div`
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => (props.$active ? '#D9D9D9' : '#FFF')};
    border: solid #F77AE7 1px;
`

export const SwipeStatus = ({ currentIndex }) => {
  return (
    <SwipeStatusStyle>
      {[...Array(4)].map((_, index) => (
        <Circle key={index} $active={index === currentIndex} />
      ))}
    </SwipeStatusStyle>
  )
};

SwipeStatus.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};


