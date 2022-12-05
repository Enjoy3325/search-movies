import { MovieTrandItem } from '../../components/MovieTrandItem/MovieTrandItem.jsx';
import { fetchTrendingMovies } from '../../service/ApiServiceFetch';

import { MoviesTrandsList, Section } from './Home.styled';
import React, { useEffect, useState } from 'react';

// import { useRef } from 'react';

export const Home = () => {
  const [movieTrends, setMoviesTrends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchTrendingMovies();
        console.log('data.result :>> ', data);
        data = setMoviesTrends(data.results);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <Section>
      <h1>Welcome to Movies Style</h1>
      <h2>Trending today</h2>

      <MoviesTrandsList>
        {movieTrends.map(movieTrend => (
          <MovieTrandItem key={movieTrend.id} {...movieTrend} />
        ))}
      </MoviesTrandsList>
    </Section>
  );
};
