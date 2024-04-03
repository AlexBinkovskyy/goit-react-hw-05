import { useEffect, useState } from 'react';
import { fetchData, fetchParams } from '../../apiService/query';
import css from './Movieslist.module.css';
import { Page404 } from '../../pages/Page404/Page404';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import axios from 'axios';
import { Spinner } from '../Spinner/Spinner';
import { LoadMore } from '../LoadMore/LoadMore';
import {getStorage, setStorageTrends } from '../../apiService/LocalStorage';

export const Movieslist = () => {
  const initState = {
    page: 1,
    results: [],
    total_pages: '',
    total_results: '',
  }

  const [trends, setTrends] = useState(getStorage('trends') ?? initState);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(trends.page);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    async function fetchList() {
      try {

        if (!trends.results.length) {
          const resp = await fetchData(
            `${fetchParams.trending.url}?page=${trends.page}`,
            controller.signal
          );
          setTrends(prevState => ({
            ...prevState,
            page: resp.page,
            results: Array.isArray(prevState.results)
              ? [...prevState.results, ...resp.results]
              : [...resp.results],
            total_pages: resp.total_pages,
            total_results: resp.total_results,
          }));
          setIsLoading(false);
        }
    if (trends.page === page) return setIsLoading(false);
        const resp = await fetchData(
          `${fetchParams.trending.url}?page=${page}`,
          controller.signal
        );
        setTrends(prevState => ({
          ...prevState,
          page: resp.page,
          results: Array.isArray(prevState.results)
            ? [...prevState.results, ...resp.results]
            : [...resp.results],
          total_pages: resp.total_pages,
          total_results: resp.total_results,
        }));
        setIsLoading(false);
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
  }, [page]);
  

  return (
    <>
      {!isLoading ? (
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
            {setStorageTrends('trends', trends)}
            <LoadMore setPage={setPage} />
          </div>
          <button className={css.upper} disabled>
            <svg className={css.upperIco} width="40" height="40 ">
              <use href="./outline_icon-min.svg#icon-circle-up"></use>
            </svg>
          </button>
          <div id="target"></div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
