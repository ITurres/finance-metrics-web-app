import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes } from 'react-router-dom';

import fetchCompanies from './services/FMPAPI/FMPAPI';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);

  console.log(companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <header>
      <Header />

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </header>
  );
};

export default App;
