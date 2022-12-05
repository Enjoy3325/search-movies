import styled from 'styled-components';

export const Section = styled.section`
  padding: 70px;
`;

export const MoviesTrandsList = styled.ul`
  /* text-align: center;
  display: grid;

  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center; */
  /* flex-wrap: wrap; */
  /* gap: 32px; */

  display: grid;
  grid-gap: 30px;

  grid-template-columns: 320px 320px 320px 320px;
  grid-template-rows: 480px 480px 480px 480px;
  justify-content: center;
`;
