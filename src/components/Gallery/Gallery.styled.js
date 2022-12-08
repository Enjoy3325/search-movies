import styled from 'styled-components';

export const MoviesGalleryList = styled.ul`
  text-align: center;
  cursor: pointer;
  display: grid;
  width: 100%;
  gap: 30px 30px;
  grid-template-columns: repeat(4, 2fr);
  margin-top: 30px;
`;

export const GalleryItem = styled.li`
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 700;
`;
export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
`;
