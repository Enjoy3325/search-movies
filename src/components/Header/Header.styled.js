import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderWraper = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;

  margin-right: auto;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderLogoSpan = styled.span`
  display: flex;
  font-size: 45px;
  font-weight: 900;
  line-height: 1.62;
  color: #2a2f62;
`;

export const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  background: none;
  border: 2px solid;
  font: inherit;
  font-size: 20px;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  transition: 0.25s;
  color: #ff9000;
  border-radius: 8px;
  border-color: #183666;
  margin-top: 40px;
  width: 150px;
  padding: 22px;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 40px;
  &.active {
    color: #ff9000;
  }
  :hover,
  :focus {
    box-shadow: 10px 10px, 0 #ffa260;
    transform: translateY(-10px);
    border-color: #ffa260;
    color: #fff;
  }
`;
export const LogoWrapper = styled(Link)`
  display: flex;

  justify-content: end;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;
export const HeaderLinkItem = styled.li`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;
export const LoginUl = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
