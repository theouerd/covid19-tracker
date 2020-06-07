import axios from 'axios';
import Config from './config';

export const fetchData = async (country) => {
  let URL = Config.url;

  if (country) URL = `${Config.countries}/${country}`;

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.error(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${Config.daily}`);

    const extractedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return extractedData;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${Config.countries}`);

    return countries.map((country) => country.name);
  } catch (err) {
    console.error(err);
  }
};
