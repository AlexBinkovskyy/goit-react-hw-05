import { useState } from 'react';
import { useParams } from 'react-router';
import { FetchAndWriteState, createPosterPath } from '../../apiService/query';
import { useNavigate, NavLink } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const movieDetails = 'movieDetails'

  FetchAndWriteState(movieId, movieDetails, setMovieDetail);

   return (
    <div className={css.wrapper}>
      <button type="button" onClick={goBack} className={css.goBackBtn}>
        Go back
      </button>
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
              <NavLink to="cast" className={css.linkInfo}>
                Cast
              </NavLink>
              <NavLink to="reviews" className={css.linkInfo}>
                Reviews
              </NavLink>
            </div>{' '}
          <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
