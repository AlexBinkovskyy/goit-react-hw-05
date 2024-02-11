import { useEffect } from 'react';
import { fetchData, fetchParams } from '../../apiService/query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Movieslist.module.css';

export const Movieslist = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchList() {
      try {
        const resp = await fetchData(fetchParams.trending, {
          controller: controller,
        });
        setTrends(resp);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      }
    }
    fetchList();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <h3>Actual trending movie:</h3>
      {error && <p>Oooops ERROR</p>}
      {trends.results && (
        <div>
          <ul>
            {trends.results.map(trend => {
              return (
                <li key={trend.id} className={css.listItem}>
                  <Link to={`/movies/${trend.id}`}>{trend.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

// adult: false;
// backdrop_path: '/pRmF6VBsRnvWCbLB9P80UvZFMyK.jpg';
// genre_ids: [10749, 35];
// id: 1014590;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Upgraded';
// overview: "Ana is an ambitious intern dreaming of a career in the art world while trying to impress her demanding boss Claire. When she's upgraded to first class on a work trip, she meets handsome Will, who mistakes Ana for her boss– a white lie that sets off a glamorous chain of events, romance and opportunity, until her fib threatens to surface.";
// popularity: 92.208;
// poster_path: '/eYsdP5QffklSZMXJMy295xTHKmt.jpg';
// release_date: '2024-02-07';
// title: 'Upgraded';
// video: false;
// vote_average: 6.792;
// vote_count: 53;
