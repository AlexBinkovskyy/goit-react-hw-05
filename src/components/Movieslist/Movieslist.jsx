import { useEffect, useState } from 'react';
import { fetchData, fetchParams } from '../../apiService/query';
import css from './Movieslist.module.css';
import { Page404 } from '../../pages/Page404/Page404';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import axios from 'axios';

export const Movieslist = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  const loadMore = entries => {
    try {
      if (entries[0].isIntersecting) {
        setNextPage();
      }
    } catch (error) {}
  };

  const observer = new IntersectionObserver(loadMore, {
    rootMargin: '50px',
    threshold: 1.0,
  });

  useEffect(() => {
    const target = document.querySelector('#target');
    observer.observe(target);
    loadMore();

    // return observer.unobserve(target);
  }, [setPage]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchList() {
      try {
        const resp = await fetchData(
          `${fetchParams.trending.url}?page=${page}`,
          controller.signal
        );
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
  }, []);

  const setNextPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <div className={css.wrapper}>
        <h3>Actual trending movie:</h3>
        {error ? (
          <Page404 />
        ) : (
          trends.results && (
            <div>
              <ul className={css.list}>
                <MovieListItem movies={trends} />
              </ul>
            </div>
          )
        )}
      </div>
      <div id="target"></div>
    </>
  );
};
