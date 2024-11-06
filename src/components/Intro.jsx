import { StyledH1, StyledBody } from "../ui/Typography";
import { Layout } from "../ui/Layout";

export const Intro = () => {
  return (
    <Layout top="40%" left="30%" rotation="15deg">
      <StyledH1>Friska och sunda hundar för aktiva liv</StyledH1>
      <StyledBody>
        Thorondor&apos;s Kennel grundades 1994 på Skånska slätten där vi
        fortsatt håller till. Här föder vi upp Engelsk staffordshire bullterrier
        och Labradorer med jaktlinjer
      </StyledBody>
    </Layout>
  );
};
