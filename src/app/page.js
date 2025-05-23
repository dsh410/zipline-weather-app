'use client';
import React, { useState,  useEffect  }  from 'react';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_API_URL}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }
  , []);

  console.log(weatherData);
  return (
    <div >
<h1 className="text-2xl font-bold">new app</h1>
    </div>
  );
}
