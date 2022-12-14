import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesStyleLink = styled(NavLink)`
  display: flex;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  transition: 0.25s;
  color: #ff9000;
  border-radius: 8px;
  border-color: #183666;
  margin-top: 40px;
  max-width: 150px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0 0.5em 0.5em -0.4em, #ffa260;
    transform: translateY(-0.25em);
    border-color: #ffa260;
    color: #fff;
  }
`;

export const WrapperDetails = styled.div`
  display: flex;
  margin-top: 150px;
  gap: 30px;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 120px;
`;
