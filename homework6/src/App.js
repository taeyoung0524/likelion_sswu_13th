import React from 'react'
import { useEffect, useState } from 'react';
import { getTourWeather } from './apis/tourWeather';
import "../src/assets/weatherList.css"

const App = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async() => {
    try{
      setError(null);
      setData(null);
      setLoading(true);

      const response = await getTourWeather();
      setData(response.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  },[]);

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  if(error) {
    return (
      <div>
        Error:{error.message}
      </div>
    )
  }
  if(!data){
    return null;
  }

  return (
    <div>
      <h1>☀️관광지 날씨 데이터☀️</h1>
      <div className="weatherList">
        <p>도시 :{data.response.body.items.item[0].doName}</p>
        <p>구 : {data.response.body.items.item[0].cityName}</p>
        <p>날씨 : {data.response.body.items.item[0].TCI_GRADE}</p>
      </div>
      <div className="weatherList">
        <p>도시 :{data.response.body.items.item[1].doName}</p>
        <p>구 : {data.response.body.items.item[1].cityName}</p>
        <p>날씨 : {data.response.body.items.item[1].TCI_GRADE}</p>
      </div>
    </div>
  )
}

export default App
