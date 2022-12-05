import { fetchInfoMovies } from '../../service/ApiServiceFetch';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesStyleBtn } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchInfoMovies(movieId);
        console.log('response :>> ', response);
        setSelectedMovie(response);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
      }
    };
    fetchMovies();
  }, []);
  const onClick = e => {
    let clickBtn = e.target.value;
  };

  return (
    selectedMovie && (
      <main>
        <Link to={`/movies${movieId}`} state={{ from: location }}>
          <MoviesStyleBtn type="button" onClick="clickBtn">
            Go Back
          </MoviesStyleBtn>
        </Link>
        <h1>{selectedMovie.title || selectedMovie.name}</h1>

        <img
          alt={selectedMovie.title || selectedMovie.title}
          src={`http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        />
        <MoviesStyleBtn type="button">Cast</MoviesStyleBtn>
        <MoviesStyleBtn type="button">Reviews</MoviesStyleBtn>
        <div>
          <span>{selectedMovie.vote_average.toFixed(2)}</span>
        </div>
        <h3>Release date: {selectedMovie.release_date}</h3>
        <h4>Gener: {selectedMovie.genres.name}</h4>
        <h2>Overview</h2>
        <p>{selectedMovie.overview}</p>
      </main>
    )
  );
};
