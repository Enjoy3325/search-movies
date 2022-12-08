import PropTypes from 'prop-types';
import { FormSearch, InputSearch, ButtonSearch } from './Searchbar.style';
import { useState } from 'react';
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
      <FormSearch onSubmit={handleSearch}>
        <InputSearch
          type="text"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder={'What do you want to watch?'}
        />
        <ButtonSearch type="search">Search</ButtonSearch>
      </FormSearch>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
