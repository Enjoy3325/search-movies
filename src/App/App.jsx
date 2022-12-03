import { Movies } from '../pages/Movies/Movies';
import { Home } from '../pages/Home/Home';
import { Header } from '../components/Header';
import { fetchTrendingMovies } from '../service/ApiServiceFetch';
import { Routes, Route, Navigate } from 'react-router-dom';

import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    async function fetchData() {
      const res = await fetchTrendingMovies();
      console.log('res1 Data :>> ', res);
    }
    fetchData();
  }, []);

  return (
    <div>
      <section>
        <Header />
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
