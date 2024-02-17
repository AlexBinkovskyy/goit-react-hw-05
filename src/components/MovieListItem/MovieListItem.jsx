import { Link, useLocation } from 'react-router-dom';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.results.map(trend => {
        return (
          <li key={trend.id} className={css.listItem}>
            <Link to={`/movies/${trend.id}`} state={{from: location}}>
              {trend.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
