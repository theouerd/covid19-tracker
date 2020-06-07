import React, { useEffect, useState, Fragment } from 'react';
import './App.css';

import { Cards, Chart, CountryPicker, NavBar } from './components';
import { fetchData } from './api';
import { Container, Spinner } from 'reactstrap';
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

  if (!data) return <Spinner />;
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </Container>
    </Fragment>
  );
};

export default App;
