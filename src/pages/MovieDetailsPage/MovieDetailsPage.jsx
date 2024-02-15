import { useState } from 'react';
import { useParams } from 'react-router';
import { FetchAndWriteState, createPosterPath } from '../../apiService/query';
import { NavLink, Link, useLocation } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const movieDetails = 'movieDetails';
  const location = useLocation();

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, css.linkInfo, isActive && css.active);
  };

  FetchAndWriteState(movieId, movieDetails, setMovieDetail);

  return (
    <div className={css.wrapper}>
      <Link to={location.state} className={css.goBackBtn}>
        Go back to search
      </Link>
      {movieDetail && (
        <div className={css.imgWrap}>
          <img
            src={createPosterPath(movieDetail.poster_path)}
            alt={movieDetail.title}
            className={css.img}
          />
          <div className={css.globalwrap}>
            <h2 className={css.title}>{movieDetail.title}</h2>
            <p className={css.runtime}>Duration: {movieDetail.runtime} min.</p>
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
            <div className={css.infoWrap}>
              <h3 className={css.titleThird}>Additional information</h3>
              <NavLink to="cast" className={buildLinkClass} state={location}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={buildLinkClass} state={location}>
                Reviews
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
