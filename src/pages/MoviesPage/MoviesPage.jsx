import { useEffect, useId, useState } from 'react';
import css from './MoviesPage.module.css';
import { fetchData, fetchParams } from '../../apiService/query';
import { Page404 } from '../Page404/Page404';
import { MovieListItem } from '../../components/MovieListItem/MovieListItem';
import { useSearchParams } from 'react-router-dom';
import { LoadMore } from '../../components/LoadMore/LoadMore';

export default function MoviesPage() {
  const inputId = useId();
  const initState = {
    page: 1,
    results: [],
    total_pages: '',
    total_results: '',
  };

  const [movieSearchList, setMovieSearchList] = useState(initState); // список фільмів з рядка запиту
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(initState.page);
  const [inputValue, setInputValue] = useState('');
  
  const searchQuery = params.get('query')
    ? `${fetchParams.movieSearch.url}${params.get('query')}&page=${page}`
    : null;

  const handleSubmit = event => {
    event.preventDefault();
    setMovieSearchList(initState);
    setPage(1);
    setError(false);
    if (!inputValue.trim()) return;
    setParams({ query: inputValue.trim().toLowerCase(), page: 1 });
  };

  useEffect(() => {
    const controller = new AbortController();
    if (!searchQuery) return;

    async function fetchList() {
      try {
        const resp = await fetchData(searchQuery, controller.signal);

        setMovieSearchList(prevState => ({
          ...prevState,
          page: resp.page,
          results: Array.isArray(prevState.results)
            ? [...prevState.results, ...resp.results]
            : [...resp.results],
          total_pages: resp.total_pages,
          total_results: resp.total_results,
        }));
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      }
    }
    fetchList();
    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <div>
      <form className={css.wrapper} onSubmit={handleSubmit} id="form">
        <label htmlFor={inputId} className={css.label}>
          Search by keyword
        </label>
        <input
          type="text"
          id={inputId}
          placeholder="Type something here"
          name="input"
          className={css.input}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {movieSearchList && (
        <div className={css.wrapper}>
          <h3>Search results:</h3>
          {error ? (
            <Page404 />
          ) : (
            movieSearchList && (
              <div>
                <ul>
                  <MovieListItem movies={movieSearchList} />
                </ul>
              </div>
            )
          )}
        </div>
      )}
      {movieSearchList.results.length ? <LoadMore setPage={setPage}/> : null }
    </div>
  );
}
