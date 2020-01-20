import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'components/Link';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import { rgba } from 'utils/style';

const Header = () => (
  <HeaderWrapper>
    <Logo
      to="/"
      aria-label="Notes App by Cody Bennett"
    >
      <LogoIcon />
      Notes App
    </Logo>
  </HeaderWrapper>
);

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 20px;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Link)`
  display: grid;
  grid-template-columns: 45px 103px;
  grid-gap: 12px;
  place-items: center;
  color: ${props => props.theme.colorAccent};
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
  line-height: 1;

  &:hover,
  &:active,
  &:focus {
    color: ${props => rgba(props.theme.colorAccent, 0.8)};
  }
`;

export default Header;
