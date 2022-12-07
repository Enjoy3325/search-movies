import { fetchMoviesSearch } from '../../service/ApiServiceFetch';

import { useState, useEffect } from 'react';
import React from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
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
  );
};
