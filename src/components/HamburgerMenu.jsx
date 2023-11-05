import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MenuWrapper = styled.nav`
  position: absolute;
  width: 0;
  height: 0;
  left: 16px;
  top: 75px;

  @media (min-width: 393px) {
    left: 32px;
    top: 90px;
  }
`

const MenuUl = styled.ul`
  position: absolute;
  z-index: 2;
  transform: translateY(-1em);
  transition: all 0.3s ease-in-out;
  list-style: none;
  padding: 50px 10px;
  width: 353px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 65px;
  opacity: 0.9;
  background: #FFFFFF;
  border-radius: var(--medium-radius);

  @media (min-width: 393px) {
    width: 794px;
  }
}
`
const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  text-align: left;
  color: #000000;
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight-mobile);
  line-height: var(--text-height-mobile);

  @media (min-width: 393px) {
    font-size: var(--heading-size-mobile);
    line-height: var(--heading-height-mobile);
  }
}
`
const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-align: left;
  color: #000000;
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight-mobile);
  line-height: var(--text-height-mobile);

  @media (min-width: 393px) {
    font-size: var(--heading-size-mobile);
    line-height: var(--heading-height-mobile);
  }
`

export const HamburgerMenu = () => {
    const { t } = useTranslation();

    return (
        <MenuWrapper>
            <MenuUl>
                {/* Navigation links (hidden by default) */}
                <li className="menu-li">
                    <MenuLink href="#">{t("mobileNav.hamburgerMenu.login")}</MenuLink>
                </li>
                <li className="menu-li">
                    {/* NavLink components for navigation to the About us and Contact us pages. They will have an "active" class when the path matches "/about" or "/contact" */}
                    <StyledLink to="/about">{t("mobileNav.hamburgerMenu.about")}</StyledLink>
                </li>
                <li className="menu-li">
                    <MenuLink href="#">{t("mobileNav.hamburgerMenu.membershipPlans")}</MenuLink>
                </li>
                <li className="menu-li">
                    <StyledLink to="/contact">{t("mobileNav.hamburgerMenu.contact")}</StyledLink>
                </li>
            </MenuUl>
        </MenuWrapper>
    )
}