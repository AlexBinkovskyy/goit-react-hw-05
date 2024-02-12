import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchAndWriteState } from '../../apiService/query';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem.jsx';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const fetchType = 'movieCast';

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
