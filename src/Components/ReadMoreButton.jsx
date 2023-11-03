import styled from "styled-components";

const ReadMoreBtn = styled.button`
  border-radius: var(--large-radius);
  border: none;
  padding: 10px 20px;
  background-color: var(--secondary);
  font-family: var(--font);
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight);
  line-height: var(--text-height-mobile);
  width: fit-content;
  
  @media (min-width: 394px) {
    font-size: 30px;
    font-weight: 500;
    line-height: 36.33px;
  }
  
  @media (min-width: 835px) {
    &:hover {
    background-color: var(--hover);
    color: #FFFFFF;
    }
  } 
`

export const ReadMoreButton = () => {
  return (
    <ReadMoreBtn type="button">read more</ReadMoreBtn>
  )
}
