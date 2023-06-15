import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'Api/api';

function Reviews() {
  const { id } = useParams();
  const movieId = Number(id);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getMovieReviewsById = async movieId => {
      try {
        const movieReviews = await api.fetchGetMoviesReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {}
    };

    getMovieReviewsById(movieId);
  }, [movieId]);

  return (
    <div>
      {
        <ul>
          {reviews !== 0 ? (
            reviews.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h3>Athor: {author}</h3>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <p>We do not have any reviews for this movie.</p>
          )}
        </ul>
      }
    </div>
  );
}
export default Reviews;
