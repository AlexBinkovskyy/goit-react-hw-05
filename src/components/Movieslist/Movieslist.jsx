import { useEffect } from 'react';
import { fetchData, fetchParams } from '../../apiService/query';
import { useState } from 'react';
import css from './Movieslist.module.css';
import { Page404 } from '../../pages/Page404/Page404';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import axios from 'axios';

export const Movieslist = () => {

  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchList() {
      try {
        const resp = await fetchData(fetchParams.trending.url, controller.signal);
        setTrends(resp);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
          return;
        } else {
          setError(true);
        }
      }
    }
    fetchList();
    return () => {
      controller.abort();
    };
  }, [setTrends]);

  return (
    <div className={css.wrapper}>
      <h3>Actual trending movie:</h3>
      {error ? (
        <Page404 />
      ) : (
        trends.results && (
          <div>
            <ul>
              <MovieListItem movies={trends} />
            </ul>
          </div>
        )
      )}
    </div>
  );
};
