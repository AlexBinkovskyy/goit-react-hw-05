import { Link, useLocation } from 'react-router-dom';
import css from './MovieListItem.module.css';


export const MovieListItem = ({ trends }) => {
  const location =  useLocation();

  return (
    <div>
      {trends.results.map(trend => {
        return (
          <li key={trend.id} className={css.listItem}>
            <Link to={`/movies/${trend.id}`} state={location}>{trend.title}</Link>
          </li>
        );
      })}
    </div>
  );
};
