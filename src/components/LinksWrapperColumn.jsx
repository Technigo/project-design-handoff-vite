import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 24px;

        .link {
            color: var(--white-red);
            text-decoration: none;
            font-family: Raleway;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            display: flex; 
            justify-content: flex-end; 
        }
`

export const LinksWrapperColumn = ({handleLinkClick}) => {
    const {t} = useTranslation()
  return (
    <StyledDiv>
      <Link className="link">{t("navbar.classes")}</Link>
      <Link className="link">{t("navbar.courses")}</Link>
      <Link className="link">{t("navbar.events")}</Link>
      <Link className="link" to={"/about"} onClick={handleLinkClick}>
        {t("navbar.about")}
      </Link>
    </StyledDiv>
  );
};
