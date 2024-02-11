import { Route, Routes } from 'react-router';
import { Movieslist } from '../../components/Movieslist/Movieslist';
import { MoviesPage } from '../MoviesPage/MoviesPage';
// import { Header } from '../../components/Header/Header';

export default function HomePage() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
    </Routes>
  );
}
