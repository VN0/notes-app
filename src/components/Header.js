import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { NavLink } from 'components/Link';
import Icon from 'components/Icon';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import { rgba } from 'utils/style';

export default function Header(props) {
  const { location } = props;
  const [hashKey, setHashKey] = useState();

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const isMatch = ({ match, hash = '' }) => {
    if (!match) return false;
    return `${match.url}${hash}` === `${location.pathname}${location.hash}`;
  };

  return (
    <React.Fragment>
      <HeaderWrapper>
        <Logo
          to={{ pathname: '/', hash: '#home', state: hashKey }}
          aria-label="Notes App by Cody Bennett"
          onClick={handleNavClick}
        >
          <LogoIcon />
          Notes App
        </Logo>
      </HeaderWrapper>
      <ButtonWrapper>
        <Button
          wide
          disabled={isMatch({ match: { url: '/' } })}
        >
          Share
        </Button>
        <Button>
          <Icon icon="plus" />
        </Button>
      </ButtonWrapper>
    </React.Fragment>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 20px;
  width: 100%;
  background: ${props => props.theme.colorBackground};

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -40px;
    height: 40px;
    width: 100%;
    background: linear-gradient(${props => props.theme.colorBackground}, transparent) no-repeat 100% 100%;
  }
`;

const Logo = styled(NavLink)`
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
  &:focus,
  &.active {
    color: ${props => rgba(props.theme.colorAccent, 0.8)};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 20px;
  width: 100%;
  background: ${props => props.theme.colorBackground};

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: -40px;
    height: 40px;
    width: 100%;
    background: linear-gradient(transparent, ${props => props.theme.colorBackground}) no-repeat 100% 100%;
  }
`;

const Button = styled.button`
  outline: 0;
  border: none;
  color: ${props => props.disabled
    ? rgba(props.theme.colorText, 0.2)
    : props.theme.colorWhite};
  border-radius: 30px;
  height: 52px;
  width: 52px;
  transition: opacity 0.3s;

  ${props => !props.disabled && css`
    background: ${props => props.theme.colorAccent};
    cursor: pointer;
  `}

  ${props => props.wide && css`
    width: 120px;
    border: 1px solid ${props => props.disabled
      ? rgba(props.theme.colorText, 0.2)
      : props.theme.colorAccent};
    font-size: 14px;
    letter-spacing: 2px;
  `}

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
  }
`;
