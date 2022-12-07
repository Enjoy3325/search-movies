import { fetchTrendingMovies } from '../../service/ApiServiceFetch';
import { Section } from './Home.styled';
import { Title, Subtitle } from '../../components/Gallery/Gallery.styled';
import React, { useEffect, useState } from 'react';
import { MoviesGallery } from 'components/Gallery/Gallery';

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
      <Title>Welcome to Movies Style</Title>
      <Subtitle>Trending today</Subtitle>
      <MoviesGallery movies={movies} />
    </Section>
  );
};
