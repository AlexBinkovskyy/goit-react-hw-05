import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchAndWriteState, fetchParams } from '../../apiService/query';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem.jsx';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const fetchType = fetchParams.movieCast.url;

  FetchAndWriteState(movieId, fetchType, setMovieCast);

  return (
    <div>
      <h2>Movie Cast page</h2>
      {movieCast && (
        <div>
          <MovieCastItem movieCast={movieCast} />
        </div>
      )}
    </div>
  );
};
