import { useId } from 'react';
import style from './SearchBar.module.css'

export const SearchBar = ({ onSubmit }) => {
  const inputId = useId();
  return (
    <header className={style.header}>
      <form onSubmit={onSubmit} className={style.form}>
        <div className={style.wrapper}>
          <input
            id={inputId}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={style.input}
          />
          <button type="submit"className={style.btn}>Search</button>
        </div>
      </form>
    </header>
  );
};
