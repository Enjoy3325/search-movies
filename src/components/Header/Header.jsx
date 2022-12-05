// import { Outlet } from 'react-router-dom';
import logo from '../../asetss/logo.png';
import {
  HeaderWraper,
  HeaderLogoSpan,
  HeaderUl,
  StyledLink,
  LogoWrapper,
  HeaderLinkItem,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWraper>
      <nav>
        <HeaderUl>
          <li>
            <LogoWrapper to="/" end>
              <img src={logo} alt="MOVIE STYLE" width={50} />
              <HeaderLogoSpan>OVIESTYLE</HeaderLogoSpan>
            </LogoWrapper>
          </li>
          <HeaderLinkItem>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </HeaderLinkItem>
        </HeaderUl>
      </nav>

      <ul>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </HeaderWraper>
  );
};
