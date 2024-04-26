import styled, { css } from "styled-components";
import logoPhone from "/src/assets/icons/topmenu/LogoPhone.png";
import logoTablet from "/src/assets/icons/topmenu/LogoTablet.png";
import logoDesktop from "/src/assets/icons/topmenu/LogoDesktop.png";
import userPhone from "/src/assets/icons/topmenu/UserPhone.png";
import userPhoneClick from "/src/assets/icons/topmenu/UserPhoneClick.png";
import userDefault from "/src/assets/icons/topmenu/UserDefault.png";
import userTablClick from "/src/assets/icons/topmenu/UserTablClick.png";
import menuPhone from "/src/assets/icons/topmenu/MenuPhone.png";
import menuPhoneClick from "/src/assets/icons/topmenu/MenuPhoneClick.png";
import menuDefault from "/src/assets/icons/topmenu/MenuDefault.png";
import menuTablHover from "/src/assets/icons/topmenu/MenuTablHoverClick.png";


const topOfPage = () => {
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
} 

export const TopMenu = () => {
  return (
    <TopMenuContainer>
      <Logo onClick={topOfPage}>
        <LogoPhone
          src={logoPhone}
          phone
        />
        <LogoTablet
          src={logoTablet}
          tablet
        />
        <LogoDesktop
          src={logoDesktop}
          desktop
        />
      </Logo>
      <MenuTextSection>
        <MenuText>First Timers</MenuText>
        <MenuText>Schedule</MenuText>
        <MenuText buy id="buy">
          Buy Sessions
        </MenuText>
      </MenuTextSection>
      <UserMenuDiv>
        <div>
          <UserPhone
            src={userPhone}
            phone
          />
          <UserPhone
            src={userPhoneClick}
            phoneclick
            active
          />
          <UserDesktop
            src={userDefault}
            desktop
          />
          <UserDesktop
            src={userTablClick}
            desktophover
            hover
          />
        </div>
        <div>
          <MenuPhone
            src={menuPhone}
            phone
          />
          <MenuPhone
            src={menuPhoneClick}
            phoneclick
            active
          />
          <MenuDesktop
            src={menuDefault}
            desktop
          />
          <MenuDesktop
            src={menuTablHover}
            desktophover
            hover
          />
        </div>
      </UserMenuDiv>
    </TopMenuContainer>
  );
};




const TopMenuContainer = styled.div`
  background-color: var(--menublack);
  width: 100%;
  height: 72px;
  margin-left: -16px;
  margin-right: -16px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media (min-width: 744px) and (max-width: 1493px) {
    height: 96px;
    margin-left: -32px;
    margin-right: -32px;
  }

  @media (min-width: 1494px) {
    height: 136px;
    margin-left: -128px;
    margin-right: -128px;
  }
`;

const Logo = styled.div`
  padding-left: 16px;
  margin-top: -55px;
  cursor: pointer;

  @media (min-width: 744px) {
    padding-left: 32px;
    margin-top: -65px;
  }

  @media (min-width: 1494px) {
    padding-left: 128px;
    margin-top: -100px;
  }
`;

const LogoPhone = styled.img`
  display: block;
  position: fixed;

  ${({ phone }) =>
    phone &&
    css`
      display: none;

      @media (max-width: 743px) {
        display: block;
        position: fixed;
      }
    `}
`;

const LogoTablet = styled.img`
  display: block;
  position: fixed;

  ${({ tablet }) =>
    tablet &&
    css`
      display: none;
      @media (min-width: 744px) AND (max-width: 1493px) {
        display: block;
        position: fixed;
      }
    `}
`;

const LogoDesktop = styled.img`
  display: block;
  position: fixed;

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      @media (min-width: 1494px) {
        display: block;
        position: fixed;
      }
    `}
`;

const MenuTextSection = styled.div`
  display: none;

  @media (min-width: 1494px) {
    display: flex;
    flex-direction: row;
    gap: 35px;
    padding-left: 100px;
  }
`;

const MenuText = styled.p`
  color: white;
  cursor: pointer;

  &:hover {
    font-weight: 550;
    margin-left: -1px;
    margin-right: -1px;
  }

  ${({ buy }) =>
    buy &&
    css`
      color: var(--purple);
    `}
`;

const UserMenuDiv = styled.div`
  padding-right: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  @media (min-width: 744px) and (max-width: 1493px) {
    padding-right: 32px;
    margin-top: -30px;
    gap: 16px;
  }
  @media (min-width: 1494px) {
    padding-right: 128px;
    margin-top: -35px;
    gap: 16px;
  }
`;

const UserPhone = styled.img`
  display: block;
  position: fixed;
  
    ${({ phone }) =>
      phone &&
      css`
        display: none;

        @media (max-width: 743px) {
          display: block;
          position: fixed;
        }
      `}

    ${({ phoneclick, active }) =>
      phoneclick &&
      active &&
      css`
        display: block;
        opacity: 0;
        position: sticky;

        @media (max-width: 743px) {
          &:active {
            opacity: 1;
          }
        }
      `}
  }
`;

const UserDesktop = styled.img`
  display: block;
  position: fixed;
  @media (min-width: 744px) and (max-width: 1493px) {
    ${({ desktop }) =>
      desktop &&
      css`
        display: block;
        position: fixed;
      `}

    ${({ desktophover, hover }) =>
      desktophover &&
      hover &&
      css`
        display: block;
        opacity: 0;
        position: sticky;

        &:active {
          opacity: 1;
        }
      `}
  }

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;
      margin-top: -10px;

      @media (min-width: 1494px) {
        display: block;
        position: fixed;
      }
    `}

  ${({ desktophover, hover }) =>
    desktophover &&
    hover &&
    css`
      display: block;
      opacity: 0;
      position: sticky;
      margin-top: -10px;

      @media (min-width: 1494px) {
        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    `}
`;

const MenuPhone = styled.img`
  display: block;
  position: fixed;
  
    ${({ phone }) =>
      phone &&
      css`
        display: none;

        @media (max-width: 743px) {
          display: block;
          position: fixed;
        }
      `}

    ${({ phoneclick, active }) =>
      phoneclick &&
      active &&
      css`
        display: block;
        opacity: 0;
        position: sticky;

        @media (max-width: 743px) {
          &:active {
            opacity: 1;
          }
        }
    `}
  }
`;

const MenuDesktop = styled.img`
  display: block;
  position: fixed;

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      @media (min-width: 744px) and (max-width: 1493px) {
        display: block;
        position: fixed;
      }
    `}

  ${({ desktophover, hover }) =>
    desktophover &&
    hover &&
    css`
      display: block;
      opacity: 0;
      position: sticky;
      @media (min-width: 744px) and (max-width: 1493px) {
        &:active {
          opacity: 1;
        }
      }
    `}

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      @media (min-width: 1494px) {
        display: block;
        position: fixed;
      }
    `}

  ${({ desktophover, hover }) =>
    desktophover &&
    hover &&
    css`
      display: block;
      opacity: 0;
      position: sticky;

      @media (min-width: 1494px) {
        &:hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    `}
`;

