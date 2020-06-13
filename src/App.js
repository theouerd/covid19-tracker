import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';

import { Cards, Chart, CountryPicker, Layout } from './components';
import { fetchData } from './api';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  ReactGA.initialize('UA-168751324-1');

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
      <Layout>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </Layout>
    </Router>
  );
};

export default App;
