// import hooks from react
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  //declare variables
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState(null);
  const inputRef = useRef();

  //useEffect hook to autofocus input field
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //handleChange function to setName to current name input
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //handleSubmit function, initially prevents form from refresh and call fetchData to get fetched data 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  //fetchData async function to fetch data from an API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nationalize.io/?name=${name}`);
      const data = await response.json();
      if (data.country.length > 0) {
        setNationality(data.country[0]);
      } else {
        setNationality(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
//return the form and output div of nationality
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter name..."
        />
        <button type="submit">Predict Nationality</button>
      </form>

      {nationality && (
        <div>
          <h2>Details of Nationality:</h2>
          <p>Country ID: {nationality.country_id}</p>
          <p>Probability: {nationality.probability}</p>
        </div>
      )}
    </div>
  );
}

export default App;
