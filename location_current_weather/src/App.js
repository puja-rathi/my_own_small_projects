import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  //declare location,weatherData using useState
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef();
  //declare my own API key 
  const APIKEY = 'a85db0ea13b14fe6acc112109241705';

  //useEffect hook to autofocus input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //handleChange to store when input value changes
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  //async handleSubmit function to call fetchData function when form submits after cliking on button
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  //fetchData function to fetch weather data from api using own api key and for perticular location 
  const fetchData = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}`);
      const data = await response.json();
      //store fetched info's current key values in WeatherData using useState hook
      setWeatherData(data.current);
    } catch (error) {
      console.error('Error fetching data:', error);
      setWeatherData(null);
    }
  };

  //final return of location's current weather info using form and input
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter city name..."
        />
        <button type="submit">Get Current Weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>Current weather in {location}:</h2>
          <p>Last updated: {weatherData.last_updated}</p>
          <p>Temparature: {weatherData.temp_c}</p>
          <p>Feels like: {weatherData.feelslike_c}</p>
          <p>Wind: {weatherData.wind_mph}</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
