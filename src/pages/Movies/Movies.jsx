import { MoviesstyleSection } from './Movies.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { fetchMoviesSearch } from '../../service/ApiServiceFetch';
import { useEffect, useState } from 'react';
// import { useHistory } from 'react';
// onClick={() => hist.goBack()}
export const Movies = () => {
  // const hist = useHistory();

  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchSearchInput(searchInput, page) {
      try {
        const res = await fetchMoviesSearch();
        const { results } = res.data;
        console.log('results :>> ', results);
        if (results === searchInput) {
          return;
        }

        console.log('res2 Search  :>> ', res);
      } catch (error) {
        console.log('Error');
      }
    }
    if (searchInput) fetchSearchInput();
  }, [movies, page, searchInput]);

  const handeleSubmitClick = searchValue => {
    if (searchInput === searchValue) {
      setSearchInput(searchValue);
      setMovies([]);
      setPage(1);
    }
  };

  return (
    <MoviesstyleSection>
      <div>
        <h1>Hello</h1>
        <li>
          <Searchbar onSubmit={handeleSubmitClick} />
        </li>
      </div>
    </MoviesstyleSection>
  );
};
