import { useState } from 'react';
import React from 'react';

export const Searchbar = props => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    props.onSubmit(inputValue);
    setInputValue('');
  };
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};
