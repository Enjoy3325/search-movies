import { MoviesGalleryItem } from '../../components/MoviesGalleryItem/MoviesGalleryItem';
import { MoviesGalleryList } from './Gallery.styled';

// import React, { useEffect, useState } from 'react';

export const MoviesGallery = ({ movies }) => {
  return (
    <MoviesGalleryList>
      {movies.map(movie => {
        console.log('movie :>> ', movie);
        return <MoviesGalleryItem key={movie.id} movie={movie} />;
      })}
    </MoviesGalleryList>
  );
};
