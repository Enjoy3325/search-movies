// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Helmet } from 'react-helmet';
import { Reviews } from '../pages/Reviews/Reviews';
import { Cast } from '../pages/Cast/Cast';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Movies } from '../pages/Movies/Movies';
import { Home } from '../pages/Home/Home';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies Style</title>
        <link
          rel="canonical"
          href="https://enjoy3325.github.io/goit-react-hw-05-movies/"
        />
        <meta name="description" content="Movies search" />
      </Helmet>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
