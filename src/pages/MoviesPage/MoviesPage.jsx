import { useId } from 'react';

export const MoviesPage = () => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>
        <input type="text" id={inputId} />
      </label>
      <button type="submit">Search</button>
    </div>
  );
};
