import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchAndWriteState } from '../../apiService/query';
import { MovieReviewItem } from '../MovieReviewItem/MovieReviewItem';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);
  const fetchType = 'movieReviews';

  FetchAndWriteState(movieId, fetchType, setMovieReview);

  return (
    <div>
      <h2>Movie Reviews page</h2>
      {movieReview && (
        <div>
          <MovieReviewItem movieReview={movieReview} />
        </div>
      )}
    </div>
  );
};
