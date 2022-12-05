import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';

export const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const { search } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchMoviesSearch(search);
        console.log('response :>> ', response);
        const data = setInputValue(response.results);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = e => {
    e.preventDefault();

    setInputValue('');
  };
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    inputValue && (
      <>
        <div>{search}</div>
        <form onSubmit={handleSearch}>
          <button type="search"></button>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder={'What do you want to watch?'}
          />
        </form>
      </>
    )
  );
};
