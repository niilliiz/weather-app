/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
const Main = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState(null);

  const handleSetCurrentPosition = async (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  const handleGetWeatherData = async () => {
    const fetchedData = await fetch(
      `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&cnt=16&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );

    await fetchedData.json().then((data) => setData(data));
  };

  console.log(data);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSetCurrentPosition);

    handleGetWeatherData();
  }, [lat, long]);

  return <main className="grow p-4">{data?.cod === "400" && "received"}</main>;
};
export default Main;
