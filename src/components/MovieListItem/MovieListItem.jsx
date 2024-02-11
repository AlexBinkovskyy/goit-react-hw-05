import { Link } from 'react-router-dom';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ trends }) => {
  return (
    <div>
      {trends.results.map(trend => {
        return (
          <li key={trend.id} className={css.listItem}>
            <Link to={`/movies/${trend.id}`}>{trend.title}</Link>
          </li>
        );
      })}
    </div>
  );
};
