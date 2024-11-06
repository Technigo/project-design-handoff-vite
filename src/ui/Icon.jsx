import styled from "styled-components";

export const IconImage = styled.img`
  height: 21.75px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = ({ src, alt }) => {
    return (
        <IconContainer>
            <IconImage src={src} alt={alt} />
        </IconContainer>
    )
}