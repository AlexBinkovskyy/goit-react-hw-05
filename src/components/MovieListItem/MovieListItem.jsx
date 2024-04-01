import { Link, useLocation } from 'react-router-dom';
import css from './MovieListItem.module.css';
import { createPosterPath } from '../../apiService/query';

export const MovieListItem = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.itemWrapper}>
      {movies.results.map(trend => {
        return (
          <li key={trend.id} className={css.listItem}>
            <Link to={`/movies/${trend.id}`} state={{from: location}}>
              <div className={css.cardWrapper}><img src={createPosterPath(trend.poster_path)}className={css.posterImage}></img></div>
              <h3 className={css.title}>{trend.title}</h3>
            </Link>
          </li>
        );
      })}
    </div>
  );
};
