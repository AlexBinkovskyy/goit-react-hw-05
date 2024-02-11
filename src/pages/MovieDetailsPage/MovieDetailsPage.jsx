import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  createPosterPath,
  fetchData,
  fetchParams,
} from '../../apiService/query';
import { Link } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const movieDetailsFetchParams = fetchParams.movieDetails.url.replace(
    'IdToReplace',
    movieId
  );

  useEffect(() => {
    async function fetchMovie() {
      try {
        const resp = await fetchData(movieDetailsFetchParams);
        setMovieDetail(resp);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      {movieDetail && (
        <div>
          <img
            src={createPosterPath(movieDetail.poster_path)}
            alt={movieDetail.title}
            width="300"
          />
          <div>
            <h2>{movieDetail.title}</h2>
            <p>Duration: {movieDetail.runtime}</p>
            <h3>Overview</h3>
            <p>{movieDetail.overview}</p>
            <h4>Genres:</h4>
            <ul>
              {movieDetail.genres.map(genree => (
                <li key={genree.id}>
                  <span>{genree.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
