import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import fetchCompanies from './services/FMPAPI/FMPAPI';
import Header from './components/Header';
import Home from './pages/Home';
import CompanyPage from './pages/CompanyPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <header>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route
          path="*"
          element={(
            <div className="error-container">
              <h1>Not Found</h1>
            </div>
          )}
        />
      </Routes>
    </header>
  );
};

export default App;
