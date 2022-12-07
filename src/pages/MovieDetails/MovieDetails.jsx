import { fetchInfoMovies } from '../../service/ApiServiceFetch';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { StyledLink } from '../../components/Header/Header.styled';

export const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  const location = useLocation();

  const fromRef = useRef(location?.state?.from);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchInfoMovies(movieId);
        console.log('response :>> ', response);
        setSelectedMovie(response);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    fetchMovies();
  }, [movieId]);

  function getGenres() {
    const result = selectedMovie.genres.map(genre => genre.name);
    return result.join(', ');
  }
  console.log('location :>> ', location);
  return (
    selectedMovie && (
      <main>
        <h1>{selectedMovie.title || selectedMovie.name}</h1>

        <img
          alt={selectedMovie.title || selectedMovie.title}
          src={`http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        />
        <StyledLink to={fromRef.current} state={{ from: location }}>
          Go Back
        </StyledLink>
        <StyledLink to={'cast'} state={{ from: location }}>
          Casts
        </StyledLink>
        <StyledLink to={'reviews'} state={{ from: location }}>
          Reviews
        </StyledLink>

        <div>
          <span>{selectedMovie.vote_average.toFixed(2)}</span>
        </div>
        <h3>Release date: {selectedMovie.release_date}</h3>
        <h4>Geners: {getGenres()}</h4>
        <h2>Overview</h2>
        <p>Users Score: {selectedMovie.overview}</p>
        <Outlet />
      </main>
    )
  );
};
