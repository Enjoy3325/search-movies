import { fetchMoviesReviews } from '../../service/ApiServiceFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import { TextMovies } from 'pages/Cast/Cast.styled';
import {
  BoxWrapper,
  ImgAuthor,
  ItemReview,
  TitleAuthor,
} from './Reviews.styled';
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
        console.log('response :>> ', response);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);
  console.log('reviews :>> ', reviews);
  return (
    <>
      {isLoading && <Loader />}
      {reviews?.length ? (
        <section>
          <div>
            <TextMovies>Reviews about the film</TextMovies>
            <BoxWrapper>
              <ul>
                {reviews.map(
                  ({
                    id,
                    author_details: { avatar_path },
                    author,
                    content,
                  }) => {
                    let imgSrc;
                    if (avatar_path) {
                      imgSrc = avatar_path.match(/^(\/http|\/https)/)
                        ? `${avatar_path.slice(1, -1)}`
                        : `https://www.gravatar.com/avatar/${avatar_path}`;
                    } else {
                      imgSrc = `https://via.placeholder.com/82x82`;
                    }

                    return (
                      <ItemReview key={id}>
                        <ImgAuthor src={imgSrc} alt={author} />
                        <TitleAuthor>Author: {author}</TitleAuthor>
                        <p>{content}</p>
                      </ItemReview>
                    );
                  }
                )}
              </ul>
            </BoxWrapper>
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

export default Reviews;
