import { useEffect, useId, useState } from 'react';
import css from './MoviesPage.module.css';
import { fetchData, fetchParams } from '../../apiService/query';
import { Page404 } from '../Page404/Page404';
import { MovieListItem } from '../../components/MovieListItem/MovieListItem';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const inputId = useId();

  const [movieSearchList, setMovieSearchList] = useState(null); // список фільмів з рядка запиту
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();

  const searchQuery = params.get('query') ? `${fetchParams.movieSearch.url}${params.get('query')}` : null;

  const handleSubmit = event => {
    setError(false);
    event.preventDefault();
    const inputValue = event.target.input.value.trim().toLowerCase();
    if (!inputValue) return;
    setParams({ 'query': inputValue });
  };

  useEffect(() => {
    const controller = new AbortController();

    if (searchQuery === null) return;

    async function fetchList() {
      try {
        const resp = await fetchData(searchQuery, controller.signal);
        if (!resp.results.length) {
          setError(true);
        }
        setMovieSearchList(resp);
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
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <label htmlFor={inputId} className={css.label}>
          Search by keyword
        </label>
        <input
          type="text"
          id={inputId}
          placeholder="Type something here"
          name="input"
          className={css.input}
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
    </div>
  );
}
