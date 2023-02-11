import { fetchMovieCredits } from '../../service/ApiServiceFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import {
  MoviesGalleryList,
  GalleryItem,
  Subtitle,
} from 'components/Gallery/Gallery.styled';
import { BoxWrapper } from 'pages/Reviews/Reviews.styled';
import { TextMovies } from './Cast.styled';
function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieCredits(movieId);
        setActors(response);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {actors && (
        <>
          <TextMovies>Actors</TextMovies>
          <BoxWrapper>
            <MoviesGalleryList>
              {actors.cast.map(({ name, profile_path, character }) => {
                return (
                  <GalleryItem key={name}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w200${profile_path}`
                          : `https://via.placeholder.com/395x574`
                      }
                      alt="{name}"
                      width="240"
                      style={{ borderRadius: '20px' }}
                    />
                    <Subtitle>{name}</Subtitle>
                    <p>Character: {character}</p>
                  </GalleryItem>
                );
              })}
            </MoviesGalleryList>
          </BoxWrapper>
        </>
      )}
    </div>
  );
}
export default Cast;
