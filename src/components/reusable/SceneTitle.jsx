import styled from "styled-components";

const StyledSceneTitle = styled.h2`
  font-family: var(--metal-mania);
  font-size: 2rem;
`;

export const SceneTitle = ({ title, className }) => {
  return <StyledSceneTitle className={className}>{title}</StyledSceneTitle>;
};
