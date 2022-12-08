import { MoviesGallery } from '../../components/Gallery/Gallery';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { fetchMoviesSearch } from '../../service/ApiServiceFetch';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'pages/Home/Home.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const lastSearch = searchParams.get('name');

  useEffect(() => {
    if (lastSearch) setIsLoading(true);
    async function fetchSearchInput() {
      try {
        const res = await fetchMoviesSearch(lastSearch);
        console.log('res :>> ', res);
        setMovies(res.results);
      } catch (error) {
        console.log('Error', error);
      } finally {
        setIsLoading(false);
      }
    }
    if (lastSearch) fetchSearchInput();
  }, [lastSearch]);

  const handeleSubmitClick = search => {
    setSearchParams({ name: search });
  };

  return (
    <Section>
      <div>
        <h1>Thousands of films for every taste are waiting for you 🎈</h1>

        <Searchbar onSubmit={handeleSubmitClick} />
        {!!movies?.length < 1 && !null && (
          <p>Sorry! Movies not found. Please, try again</p>
        )}
        {isLoading ? <p>Loading...</p> : <MoviesGallery movies={movies} />}
      </div>
    </Section>
  );
}
export default Movies;
