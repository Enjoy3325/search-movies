// import { fetchTrendingMovies } from '../../service/ApiServiceFetch';
import { MovieTrandItem } from '../MovieTrandItem/MovieTrandItem.jsx';
import { MoviesTrandsList } from '../../pages/Home/Home.styled';
// import React, { useEffect, useState } from 'react';

export const Gallery = ({ movies }) => {
  return (
    <MoviesTrandsList>
      {movies.map(movie => {
        return <MovieTrandItem key={movie.id} movie={movie} />;
      })}
    </MoviesTrandsList>
  );
};
