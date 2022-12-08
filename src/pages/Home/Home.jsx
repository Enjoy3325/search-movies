import { fetchTrendingMovies } from '../../service/ApiServiceFetch';
import { Section } from './Home.styled';
import { Title, Subtitle } from '../../components/Gallery/Gallery.styled';
import React, { useEffect, useState } from 'react';
import { MoviesGallery } from 'components/Gallery/Gallery';

import { Loader } from 'components/Loader/Loader';

// import { useRef } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
      } finally {
        setIsLoader(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Section>
      <Title>Welcome to Movies Style</Title>
      <Subtitle>Trending today</Subtitle>
      {isLoader && <Loader />}
      <MoviesGallery movies={movies} />
    </Section>
  );
}
export default Home;
