import { fetchTrendingMovies } from '../../service/ApiServiceFetch';
import React, { useEffect, useState } from 'react';

export const Home = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetchTrendingMovies(results);
      console.log('TrendingMovies  :>> ', res);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Welcome to Movies Style</h1>
      <h2>Trending today</h2>

      <ul>
        <li></li>
      </ul>
    </main>
  );
};
