import { fetchMoviesSearch } from '../service/ApiServiceFetch';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import logo from '../asetss/logo.png';
import { StyledLink } from '../App/App.steled';

export const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchSearchInput(searchInput, page) {
      try {
        const res = await fetchMoviesSearch();
        const { results } = res.data;
        console.log('results :>> ', results);
        if (setMovies(results === searchInput)) {
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
      return;
      setSearchInput(searchValue);
      setMovies([]);
      setPage(1);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" end></StyledLink>
            <img src={logo} alt="MOVIESTYLE" width={50} />
            <span>OVIESTYLE</span>
          </li>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
          <li>
            <Searchbar onSubmit={handeleSubmitClick} />
          </li>
        </ul>
      </nav>
      <ul>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};
