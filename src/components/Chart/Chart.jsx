import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardBody, Container } from 'reactstrap';

import style from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };

    fetchAPI();
  }, []);

  const lineChartOptions = {
    maintainAspectRatio: false,
  };

  const lineChart = dailyData.length ? (
    <Card className="bg-default">
      <CardBody>
        <div className="chart">
          <Line
            data={{
              labels: dailyData.map(({ date }) => date), // map
              datasets: [
                {
                  data: dailyData.map(({ confirmed }) => confirmed),
                  label: 'Infected',
                  borderColor: 'rgba(45, 73, 139, 1)',
                  fill: true,
                },
                {
                  data: dailyData.map(({ deaths }) => deaths),
                  label: 'Deaths',
                  borderColor: 'rgba(139, 45, 45, 1)',
                  backgroundColor: 'rgba(139, 45, 45, 1)',
                  fill: true,
                },
              ],
            }}
            options={lineChartOptions}
          />
        </div>
      </CardBody>
    </Card>
  ) : null;

  const barChartOptions = {
    legend: { display: false },
    title: { display: true, text: `Current state in ${country}` },
    maintainAspectRatio: false,
  };

  const barChart = confirmed ? (
    <Card className="bg-default">
      <CardBody>
        <div className={style.barChart}>
          <Bar
            data={{
              labels: ['Infected', 'Recovred', 'Deaths'],
              datasets: [
                {
                  label: 'People',

                  backgroundColor: [
                    'rgba(45, 73, 139, 1)',
                    'rgba(45, 139, 73, 1)',
                    'rgba(139, 45, 45, 1)',
                  ],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={barChartOptions}
          />
        </div>
      </CardBody>
    </Card>
  ) : null;

  return <Container>{country ? barChart : lineChart}</Container>;
};

export default Chart;
