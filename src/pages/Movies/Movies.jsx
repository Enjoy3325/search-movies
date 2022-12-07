import { MoviesGallery } from '../../components/Gallery/Gallery';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { fetchMoviesSearch } from '../../service/ApiServiceFetch';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Section } from 'pages/Home/Home.styled';
// import { IoBalloonSharp } from 'react-icons/io';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  console.log('movies :>> ', movies);
  const [searchParams, setSearchParams] = useSearchParams();
  const lastSearch = searchParams.get('name');
  console.log('lastSearch :>> ', lastSearch);
  useEffect(() => {
    async function fetchSearchInput() {
      try {
        const res = await fetchMoviesSearch(lastSearch);
        console.log('res :>> ', res);
        setMovies(res.results);

        console.log('res2 Search  :>> ', res);
      } catch (error) {
        console.log('Error', error);
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
        <h1>
          Thousands of films for every taste are waiting for you
          {/* <IoBalloonSharp /> */}
        </h1>

        <Searchbar onSubmit={handeleSubmitClick} />
        {!!movies.length && <MoviesGallery movies={movies} />}
      </div>
    </Section>
  );
};
