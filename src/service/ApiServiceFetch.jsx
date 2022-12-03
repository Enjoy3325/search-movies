const API_KEY = '631075854851454119cb09d20165cf60';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return await response.json();
  } catch (error) {}
};

export const fetchMoviesSearch = async (query, page = 1, adult = false) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&q=${query}&language=en-US&${page}&${adult}`
    );
    return await response.json();
  } catch (error) {}
};

export const fetchInfoMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
    );
    return await response.json();
  } catch (error) {}
};

export const fetchMovieCredits = async () => {
  try {
    const response = await fetch(`
https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`);
    return await response.json();
  } catch (error) {}
};
