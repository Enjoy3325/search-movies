import { fetchMovieCredits } from '../../service/ApiServiceFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchMovieCredits(movieId);
        console.log('response Credits :>> ', response);
        setActors(response);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      {actors && (
        <>
          <h2>Actors</h2>
          <div>
            <ul>
              {actors.cast.map(({ name, profile_path, character }) => {
                return (
                  <li key={name}>
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w200${profile_path}`
                          : `../../asetss/no-photo-icon-22.png`
                      }
                      alt="{name}"
                      width="170"
                      style={{ borderRadius: '15px' }}
                    />
                    <h3>Name: {name}</h3>
                    <p>Character: {character}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
