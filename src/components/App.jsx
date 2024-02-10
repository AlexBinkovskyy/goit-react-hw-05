import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import PaymentsPage from '../pages/PaymentsPage';
import NotFoundPage from '../pages/NotFoundPage';
import PaymentDetails from '../pages/PaymentDetails';

export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetails />}>
          <Route path='subpage-a' element={<div><h3>subpage-A</h3></div>}/>
          <Route path='subpage-b' element={<div><h3>subpage-B</h3></div>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
