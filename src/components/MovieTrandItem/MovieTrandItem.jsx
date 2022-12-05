import { Link, useLocation } from 'react-router-dom';
import { MoviesTrandsItem, TrendMovieTirle } from './MovieTrandItem.styled';
import React from 'react';

export const MovieTrandItem = ({ id, title, poster_path, vote_average }) => {
  const location = useLocation();
  return (
    <div>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h1>{title}</h1>
        <img alt={title} src={`http://image.tmdb.org/t/p/w500${poster_path}`} />
        <div>
          <span>{vote_average.toFixed(2)}</span>
        </div>
      </Link>
    </div>
  );
};
