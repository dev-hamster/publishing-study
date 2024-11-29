import styled from '@emotion/styled';

import IcoMenu from '@/shared/assets/ico_burger_menu.svg?react';
import IcoLogo from '@/shared/assets/ico_logo.svg?react';
import IcoUser from '@/shared/assets/ico_user.svg?react';

const Header = () => {
  return (
    <HeaderLayout>
      <Logo>
        <IcoLogo />
        <LogoText>NFT Marketplace</LogoText>
      </Logo>
      <Menu>
        <MenuButton>
          <IcoMenu />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <MenuItemText>Marketplace</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>Rankings</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemText>Connect a wallet</MenuItemText>
          </MenuItem>
          <MenuItem>
            <SignupButton>
              <IcoUser width={20} height={20} />
              <span>Sign Up</span>
            </SignupButton>
          </MenuItem>
        </MenuList>
      </Menu>
    </HeaderLayout>
  );
};

export default Header;

const tabletBreakpoint = '834px';
const pcBreakpoint = '1280px';

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #2b2b2b;
  @media (min-width: ${tabletBreakpoint}) {
    padding: 15px 50px;
  }
  @media (min-width: ${pcBreakpoint}) {
    padding: 20px 50px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const LogoText = styled.h1`
  color: #fff;
  font-size: 18px;
`;
const Menu = styled.div``;
const MenuButton = styled.div`
  @media (min-width: ${pcBreakpoint}) {
    display: none;
  }
`;
const MenuList = styled.ul`
  display: none;
  @media (min-width: ${pcBreakpoint}) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    list-style: none;
  }
`;
const MenuItem = styled.li`
  display: flex;
  height: 46px;
`;

const MenuItemText = styled.a`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: #fff;
  }
`;

const SignupButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 30px;
  border-radius: 20px;
  background: #a259ff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  text-align: center;
`;
