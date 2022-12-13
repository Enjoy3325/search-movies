import {
  MoviesGalleryList,
  GalleryItem,
  Title,
  Subtitle,
} from 'components/Gallery/Gallery.styled';
import { fetchMovieCredits } from '../../service/ApiServiceFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

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
          <Title>Actors</Title>
          <div>
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
                      width="170"
                      style={{ borderRadius: '15px' }}
                    />
                    <Subtitle>{name}</Subtitle>
                    <p>Character: {character}</p>
                  </GalleryItem>
                );
              })}
            </MoviesGalleryList>
          </div>
        </>
      )}
    </div>
  );
}
export default Cast;
