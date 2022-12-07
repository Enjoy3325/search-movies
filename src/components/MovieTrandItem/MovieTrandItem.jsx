import { Link, useLocation } from 'react-router-dom';
import {
  MovieImg,
  MoviesTrandsItem,
  AverageDiv,
} from './MovieTrandItem.styled';
import React from 'react';

export const MovieTrandItem = ({ movie }) => {
  const location = useLocation();

  return (
    <MoviesTrandsItem>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {/* <TrendMovieTitle>{movie.title}</TrendMovieTitle> */}
        <MovieImg
          alt={movie.title}
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <AverageDiv>
          <span>{movie.vote_average}</span>
        </AverageDiv>
      </Link>
    </MoviesTrandsItem>
  );
};
