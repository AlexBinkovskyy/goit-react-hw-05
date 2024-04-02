import { Link, useLocation } from 'react-router-dom';
import css from './MovieListItem.module.css';
import { createPosterPath } from '../../apiService/query';

export const MovieListItem = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.itemWrapper}>
      {movies.results.map(trend => {
        return (
          <li key={trend.id} className={css.listItem}>
            <Link to={`/movies/${trend.id}`} state={{ from: location }}>
              <div className={css.cardWrapper}>
                <img
                  src={
                    trend.poster_path
                      ? createPosterPath(trend.poster_path)
                      : defaultImg
                  }
                  className={css.posterImage}
                  width="300px"
                ></img>
              </div>
              <h2 className={css.title}>{trend.title}</h2>
            </Link>
          </li>
        );
      })}
    </div>
  );
};
