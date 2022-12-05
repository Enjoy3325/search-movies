import styled from 'styled-components';

export const MoviesStyleBtn = styled.button`
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
