import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  createPosterPath,
  fetchData,
  fetchParams,
} from '../../apiService/query';
import { NavLink } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

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
    <div className={css.wrapper}>
      <NavLink to="/" className={buildLinkClass}>
        Back to previous page
      </NavLink>
      {movieDetail && (
        <div className={css.imgWrap}>
          <img
            src={createPosterPath(movieDetail.poster_path)}
            alt={movieDetail.title}
            className={css.img}
          />
          <div>
            <h2 className={css.title}>{movieDetail.title}</h2>
            <p className={css.runtime}>Duration: {movieDetail.runtime}</p>
            <h3 className={css.titleThird}>Overview</h3>
            <p className={css.parag}>{movieDetail.overview}</p>
            <h4 className={css.titleFourth}>Genres:</h4>
            <ul className={css.list}>
              {movieDetail.genres.map(genree => (
                <li key={genree.id} className={css.listItem}>
                  <span className={css.genre}>{genree.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
