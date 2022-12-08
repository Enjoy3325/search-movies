import logo from '../../asetss/logo.png';
import {
  HeaderWraper,
  HeaderLogoSpan,
  HeaderUl,
  StyledLink,
  LogoWrapper,
  HeaderLinkItem,
  // LoginUl,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWraper>
      <LogoWrapper to="/" end="true">
        <img src={logo} alt="MOVIE STYLE" width={50} />
        <HeaderLogoSpan>OVIESTYLE</HeaderLogoSpan>
      </LogoWrapper>
      <nav>
        <HeaderUl>
          <HeaderLinkItem>
            <StyledLink to="/" end="true">
              Home
            </StyledLink>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </HeaderLinkItem>
        </HeaderUl>
      </nav>

      {/* <LoginUl>
        <StyledLink>Sign In</StyledLink>
        <StyledLink>Sign Up</StyledLink>
      </LoginUl> */}
    </HeaderWraper>
  );
};
