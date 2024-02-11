import { Route, Routes } from "react-router";
import { Header } from "./Header/Header";

export const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='' element={} />
      </Routes>
      
    </div>
  );
};