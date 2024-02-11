import { NavLink, Route, Routes } from 'react-router-dom';
import css from './Page404.module.css';
import HomePage from '../HomePage/HomePage';

export const Page404 = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.backLink}>
        Back to HomePage
      </NavLink>
      <Routes>
        <Route element={<HomePage/>}/>
      </Routes>
    </div>
  );
};
