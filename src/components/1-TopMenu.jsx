import styled, { css } from "styled-components";

const TopMenuContainer = styled.div`
  background-color: var(--menublack);
  width: 100%;
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
        display: none;

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

// TopMenu component
export const TopMenu = () => {
  return (
    <TopMenuContainer>
      <Logo>
        <LogoPhone
          className="logo-phone"
          src="./src/assets/icons/topmenu/LogoPhone.png"
          phone
        />
        <LogoTablet
          className="logo-tablet"
          src="./src/assets/icons/topmenu/LogoTablet.png"
          tablet
        />
        <LogoDesktop
          className="logo-desktop"
          src="./src/assets/icons/topmenu/LogoDesktop.png"
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
        <div className="user">
          <UserPhone
            className="user-phone"
            src="./src/assets/icons/topmenu/UserPhone.png"
            phone
          />
          <UserPhone
            className="user-phone-click"
            src="./src/assets/icons/topmenu/UserPhoneClick.png"
            phoneclick
            active
          />
          <UserDesktop
            className="user-desktop"
            src="./src/assets/icons/topmenu/UserDefault.png"
            desktop
          />
          <UserDesktop
            className="user-desktop-hover"
            src="./src/assets/icons/topmenu/UserTablClick.png"
            desktophover
            hover
          />
        </div>
        <div className="menu">
          <MenuPhone
            className="menu-phone"
            src="./src/assets/icons/topmenu/MenuPhone.png"
            phone
          />
          <MenuPhone
            className="menu-phone-click"
            src="./src/assets/icons/topmenu/MenuPhoneClick.png"
            phoneclick
            active
          />
          <MenuDesktop
            className="menu-desktop"
            src="./src/assets/icons/topmenu/MenuDefault.png"
            desktop
          />
          <MenuDesktop
            className="menu-desktop-hover"
            src="./src/assets/icons/topmenu/MenuTablHoverClick.png"
            desktophover
            hover
          />
        </div>
      </UserMenuDiv>
    </TopMenuContainer>
  );
};
