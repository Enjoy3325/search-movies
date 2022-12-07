import { fetchTrendingMovies } from '../../service/ApiServiceFetch';
import { Gallery } from '../../components/Gallery/Gallery';
import { Section } from './Home.styled';
import React, { useEffect, useState } from 'react';

// import { useRef } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        console.log('data.result :>> ', data);
        setMovies(data.results);
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
      <Gallery movies={movies} />
    </Section>
  );
};
