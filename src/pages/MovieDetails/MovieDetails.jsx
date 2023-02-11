import { Suspense } from 'react';
import { fetchInfoMovies } from '../../service/ApiServiceFetch';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { WrapperDetails, Overview, ButtonWrapper } from './MovieDetails.styled';
import { StyledLink } from '../../components/Header/Header.styled';
import { Loader } from 'components/Loader/Loader';

function MovieDetails() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const fromRef = useRef(location?.state?.from);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchInfoMovies(movieId);

        setSelectedMovie(response);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  function getGenres() {
    const result =
      selectedMovie?.genres && selectedMovie?.genres.map(genre => genre?.name);
    return result?.join(', ');
  }

  return (
    selectedMovie && (
      <main>
        <WrapperDetails>
          <img
            alt={selectedMovie?.title || selectedMovie?.title}
            src={`http://image.tmdb.org/t/p/w400${selectedMovie?.poster_path}`}
          />

          <Overview>
            <h1>{selectedMovie?.title || selectedMovie?.name}</h1>
            <h2>Overview</h2>
            <p>Users Score: {selectedMovie?.overview}</p>

            <h3>Release date: {selectedMovie?.release_date}</h3>
            <h4>Geners: {getGenres()}</h4>
            <span>Reiting: {selectedMovie?.vote_average?.toFixed(2)}</span>
            <ButtonWrapper>
              <StyledLink to={fromRef?.current} state={{ from: location }}>
                Go Back
                {isLoading && <Loader />}
              </StyledLink>

              <StyledLink to={'cast'} state={{ from: location }}>
                Casts
                {isLoading && <Loader />}
              </StyledLink>
              <StyledLink to={'reviews'} state={{ from: location }}>
                Reviews
                {isLoading && <Loader />}
              </StyledLink>
              <StyledLink to={'trailer'} state={{ from: location }}>
                Watch trailer
                {isLoading && <Loader />}
              </StyledLink>
            </ButtonWrapper>
          </Overview>
        </WrapperDetails>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    )
  );
}
export default MovieDetails;
