import styled from 'styled-components';

export const MoviesTrandsItem = styled.li`
  /* display: block;
  width: 260px;
  height: 380px;
  text-align: center;
  margin: 0;
  padding: 0; */
  /* display: grid;
  place-items: center; */
  display: block;
  max-width: 300px;
  max-height: 320px;
  width: calc((100% / 4) - 30px * 2);
  /* margin: 15px;
  width: calc((100% / 4) - 30px * 4); */
  transition: all 0.2s ease-in-out;
  /* grid-template-columns: repeat(160px 160px 160px 160px);
  grid-column-gap: 15px;
  grid-row-gap: 1em; */
  border-radius: 10px;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const TrendMovieTitle = styled.h2`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
`;

export const MovieImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 15px;
  position: relative;
  z-index: -1;
`;
export const AverageDiv = styled.div`
  position: absolute;
  display: block;

  top: 0;
  right: 0;
  margin: 0;
  border-radius: 50%;
`;
