import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Cards, Chart, CountryPicker, NavBar, Footer } from './components';
import { fetchData } from './api';
import { Container } from 'reactstrap';
const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData();
      setData(data);
    };

    fetchAPI();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(country);
    setData(data);
  };

  if (!data) console.log('here');
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Container>
          <Cards data={data} />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} />
        </Container>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
