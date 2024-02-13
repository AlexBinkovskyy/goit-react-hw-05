import { useEffect, useId, useRef, useState } from 'react';
import css from './MoviesPage.module.css';
import { fetchData, fetchParams } from '../../apiService/query';
import { Page404 } from '../Page404/Page404';
import { MovieListItem } from '../../components/MovieListItem/MovieListItem';

export const MoviesPage = () => {
  const inputId = useId();
  const input = useRef();
  const [movieSearch, setMovieSearch] = useState(null);
  const [movieSearchList, setMovieSearchList] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    console.log(input.current.value);
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
