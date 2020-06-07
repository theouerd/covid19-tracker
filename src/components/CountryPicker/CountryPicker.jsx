import React, { useState, useEffect } from 'react';

import { FormGroup, Input } from 'reactstrap';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <FormGroup className="text-center mt-3">
      <Input
        className="form-control-alternative"
        type="select"
        name="country"
        id="countryPicker"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default CountryPicker;
