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
        console.log('response Credits :>> ', response);
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
                          : `https://via.placeholder.com/395x574`
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
}
export default Cast;