import PropTypes from 'prop-types';
import { fetchMoviesReviews } from '../../service/ApiServiceFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await fetchMoviesReviews(movieId);
        setReviews(response.results);
        console.log('response Reviews :>> ', response);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {reviews?.length ? (
        <section>
          <div>
            <h2>Reviews about the film</h2>
            <div>
              <ul>
                {reviews.map(
                  ({
                    id,
                    author_details: { avatar_path },
                    author,
                    content,
                  }) => {
                    const ImgSrc = avatar_path
                      ? `${avatar_path.slice(1, -1)}`
                      : `https://via.placeholder.com/395x574`;
                    return (
                      <li key={id}>
                        <img src={ImgSrc} alt={author} />
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <p>Unfortunately there are no rewiews yet</p>
        </div>
      )}
    </>
  );
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Reviews;