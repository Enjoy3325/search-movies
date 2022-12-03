import { Routes, Route, Navigate } from 'react-router-dom';
import { Movies } from '../pages/Movies/Movies';
import { Home } from '../pages/Home/Home';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet';

export const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies Style</title>
        <link
          rel="canonical"
          href="https://enjoy3325.github.io/goit-react-hw-05-movies/"
        />
        <meta name="description" content="Movies search" />
      </Helmet>
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
