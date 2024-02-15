import { useEffect, useId, useRef, useState } from 'react';
import css from './MoviesPage.module.css';
import { fetchData } from '../../apiService/query';
import { Page404 } from '../Page404/Page404';
import { MovieListItem } from '../../components/MovieListItem/MovieListItem';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const inputId = useId();
  const input = useRef();

  const [movieSearch, setMovieSearch] = useState(null); //рядок запиту з інпута
  const [movieSearchList, setMovieSearchList] = useState(null); // список фільмів з рядка запиту
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();

  const searchQuery = params.get('searchQuery') ?? '';

  const handleSubmit = () => {
    setMovieSearch(`search/movie?query=${input.current.value}`);
  };

  useEffect(() => {
    if (!movieSearch) return;
    async function fetchList() {
      try {
        const resp = await fetchData(movieSearch);
        setMovieSearchList(resp);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      }
    }
    fetchList();
    return () => {};
  }, [movieSearch]);

  const handleSearch = event => {
    params.set('searchQuery', event)
    setParams(params);
  };

  return (
    <div>
      <div className={css.wrapper}>
        <label htmlFor={inputId} className={css.label}>
          Search by keyword
        </label>
        <input
          ref={input}
          type="text"
          id={inputId}
          placeholder="Type something here"
          value={searchQuery}
          onChange={evt => handleSearch(evt.target.value)}
          className={css.input}
        />
        <button type="submit" onClick={handleSubmit} className={css.btn}>
          Search
        </button>
      </div>
      {movieSearchList && (
        <div className={css.wrapper}>
          <h3>Search results:</h3>
          {error ? (
            <Page404 />
          ) : (
            movieSearchList && (
              <div>
                <ul>
                  <MovieListItem trends={movieSearchList} />
                </ul>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
