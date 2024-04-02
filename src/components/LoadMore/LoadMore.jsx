import css from './LoadMore.module.css'

export const LoadMore = ({ setPage }) => {
  const handleClick = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <button className={css.btn} type="button" onClick={handleClick}>
        load more...
      </button>
    </div>
  );
};
