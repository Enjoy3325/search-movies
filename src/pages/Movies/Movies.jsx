import { Gallery } from '../../components/Gallery/Gallery';
import { MoviesstyleSection } from './Movies.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { fetchMoviesSearch } from '../../service/ApiServiceFetch';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Section } from 'pages/Home/Home.styled';
// import { IoBalloonSharp } from 'react-icons/io';
// import { useHistory } from 'react';
// onClick={() => hist.goBack()}
export const Movies = () => {
  // const hist = useHistory();

  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  console.log('movies :>> ', movies);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getLastSearch = searchParams.get('name');
    if (getLastSearch) {
      setSearchInput(getLastSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchSearchInput() {
      try {
        const res = await fetchMoviesSearch(searchInput);
        console.log('res :>> ', res);
        setMovies(res.results);
        setSearchParams({ name: searchInput });

        console.log('res2 Search  :>> ', res);
      } catch (error) {
        console.log('Error', error);
      } finally {
      }
    }
    if (searchInput) fetchSearchInput();
  }, [searchInput, setSearchParams]);

  const handeleSubmitClick = search => {
    setSearchInput(search);
  };

  return (
    <Section>
      <div>
        <h1>
          Thousands of films for every taste are waiting for you{' '}
          {/* <IoBalloonSharp /> */}
        </h1>

        <Searchbar onSubmit={handeleSubmitClick} />
        {!!movies.length && <Gallery movies={movies} />}
      </div>
    </Section>
  );
};
