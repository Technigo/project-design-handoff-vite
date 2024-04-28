//import styled
import styled from "styled-components";

//import icon
import Globe from "../../public/icons/globe.svg";

//styles
const FooterIcon = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    fill: var(--primary-prpl);
    cursor: pointer;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  text-align: center;
  color: var(--primary-blk);

  @media all and (min-width: 744px) {
    font-size: 14px;
  }

  @media all and (min-width: 1024px) {
    font-size: 16px;
  }

  &:hover {
    color: var(--primary-prpl);
    cursor: pointer;
  }
`;

//component
export const Language = () => {
  return (
    <>
      <FooterIcon src={Globe} alt="Globe icon"></FooterIcon>
      <FooterText>English</FooterText>
    </>
  );
};
