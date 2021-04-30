import {
  fetchIndiaData,
  fetchIndiaGraphData,
  fetchGlobalData,
  fetchDailyData,
} from '../../api';
import DataTable from '../DataTable/DataTable.jsx';
import { Paper, Tabs } from '@material-ui/core';

import React, { Suspense, lazy, useState, useEffect } from 'react';
import './SelectionTabs.css';

const Cards = lazy(() =>
  import('../Cards/Cards.jsx')
);




const SelectionTabs = () => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchIndiaData());
    };
    fetchData();
    const fetchGraphData = async () => {
      setGraphData(await fetchIndiaGraphData());
    };
    fetchGraphData();
  }, []);

  const handleChange = (event, newVal) => {
    setValue(newVal);
    setCountry('');
    if (newVal === 1) {
      const fetchData = async () => {
        setData(await fetchIndiaData());
      };
      fetchData();
      const fetchGraphData = async () => {
        setGraphData(await fetchIndiaGraphData());
      };
      fetchGraphData();
    } else if (newVal === 2) {
      const fetchData = async () => {
        setData(await fetchGlobalData());
      };
      fetchData();
      const fetchGraphData = async () => {
        setGraphData(await fetchDailyData());
      };
      fetchGraphData();
    }
  };

  const handleCountryChange = async (country) => {
    const retrievedData = await fetchGlobalData(country);
    setData(retrievedData);
    setGraphData(retrievedData);
    setCountry(country);
  };

  return (
    <div className="tab-container">
      <Suspense fallback={<div />}>
        <Paper square elevation={0} className="tab-style">
          <Tabs
            className="tabs"
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
          >

          </Tabs>
        </Paper>
      </Suspense>



      <Suspense fallback={<div />}>
        <Cards data={data} value={value} index={1} />
      </Suspense>

      <DataTable value={value} index={1} data={data} />

      <Suspense fallback={<div />}>
        <Cards data={data} value={value} index={2} />
      </Suspense>
    </div>
  );
};

export default React.memo(SelectionTabs);
