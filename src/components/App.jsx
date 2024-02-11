import { Route, Routes } from "react-router";
// import { Header } from "./Header/Header";
// import { fetchData, fetchParams } from "../apiService/query";
import { Movieslist } from "./Movieslist/Movieslist";
import HomePage from "../pages/HomePage/HomePage";
import { Page404 } from "../pages/Page404/Page404";

export const App = () => {
  // fetchData(fetchParams.trending)
  


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}>
        <Route path='components/Movieslist' element={<Movieslist />}/>
        </Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  );
};