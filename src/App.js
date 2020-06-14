import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';

import { Cards, Charts, CountryPicker, Layout } from './components';
import { fetchData } from './api';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

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
        <Charts data={data} country={country} />
      </Layout>
    </Router>
  );
};

export default App;
