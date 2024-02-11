import { useId } from 'react';
import css from './MoviesPage.module.css';

export const MoviesPage = () => {
  const inputId = useId();

  return (
    <div className={css.wrapper}>
      <label htmlFor={inputId} className={css.label}>
        Search by keyword
      </label>
      <input type="text" id={inputId} className={css.input}/>

      <button type="submit">Search</button>
    </div>
  );
};
