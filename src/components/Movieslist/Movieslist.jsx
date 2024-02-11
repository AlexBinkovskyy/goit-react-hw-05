import { useEffect } from 'react';
import { fetchData, fetchParams } from '../../apiService/query';
import { useState } from 'react';
import css from './Movieslist.module.css';
import { Page404 } from '../../pages/Page404/Page404';
import { MovieListItem } from '../MovieListItem/MovieListItem';

export const Movieslist = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();

    async function fetchList() {
      try {
        const resp = await fetchData(fetchParams.trending, //{ controller }
          );
        setTrends(resp);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      }
    }
    fetchList();
    return () => {
      //controller.abort();
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <h3>Actual trending movie:</h3>
      {error ? (
        <Page404 />
      ) : (
        trends.results && (
          <div>
            <ul>
              <MovieListItem trends={trends} />
            </ul>
          </div>
        )
      )}
    </div>
  );
};
