import { Layout } from "../ui/Layout";
import { Divider } from "../ui/Divider";
import { Button } from "../ui/Button";

import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
padding: 1.2rem 1rem; 
  z-index: 1;
`;

const StyledImage = styled.img`
width: 100%;
height: 13.75rem;
`;

export const Dogs = () => {
  return (
    <Layout  $top="80%" $left="80%" $rotation="28deg">

      <StyledImage src="assets/dog-images/dogs-section-image.webp" alt="Dogs"/>

    <ContentWrapper>
      <Divider $variant="rotateX" />
      <Button>Våra hundar</Button>
      <Divider $variant="rotate" />
    </ContentWrapper>
    </Layout>
  )
}
