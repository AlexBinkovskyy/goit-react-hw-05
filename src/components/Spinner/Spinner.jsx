import { RotateLoader } from 'react-spinners';
import css from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={css.wrapper}>
      <RotateLoader color="#448ee2" className={css.spinner} />
    </div>
  );
};
