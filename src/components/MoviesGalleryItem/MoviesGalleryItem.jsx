import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  MovieImg,
  AverageDiv,
  AverageSpan,
} from '../MoviesGalleryItem/MoviesGalleryItem.styled';
import React from 'react';
import { GalleryItem } from 'components/Gallery/Gallery.styled';

export const MoviesGalleryItem = ({ movie }) => {
  const location = useLocation();

  return (
    <GalleryItem>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <AverageDiv>
          <MovieImg
            alt={movie.title || 'movie'}
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://via.placeholder.com/395x574`
            }
          />

          <AverageSpan>{movie.vote_average.toFixed(2)}</AverageSpan>
        </AverageDiv>
      </Link>
    </GalleryItem>
  );
};

MoviesGalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
