import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import {
  FetchAndWriteState,
  createPosterPath,
  fetchParams,
} from '../../apiService/query';
import { NavLink, Link, useLocation } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const movieDetails = fetchParams.movieDetails.url;
  const location = useLocation();
  
  const backLink = useRef(location.state?.from ?? '/');
  const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, css.linkInfo, isActive && css.active);
  };
  const controller = new AbortController();

  
  FetchAndWriteState(movieId, movieDetails, setMovieDetail, controller.signal);

  return (
    <div className={css.wrapper}>
      <Link to={backLink.current} className={css.goBackBtn}>
        Go back to search
      </Link>
      {movieDetail && (
        <div className={css.imgWrap}>
          <img
            src={
              movieDetail.poster_path
                ? createPosterPath(movieDetail.poster_path)
                : defaultImg
            }
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
              <NavLink to="cast" className={buildLinkClass}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={buildLinkClass}>
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
