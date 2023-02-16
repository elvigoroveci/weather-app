
import './App.css';
import  { useState } from 'react';

const api = {
  key:"85f7ae6a3bbce1a6708011d66681c0a2",
}

function App() {

  const [CityName, setCityName] = useState("");
  const [Weather, setWeather] = useState([]);



  const searchTemp = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${api.key}&units=metric`)
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      setWeather(result); 
    }).catch((error) => {
      console.error('Error:', error);
    });
  }
  const searchTempBTn = () =>{
    searchTemp();
  }

  return (

    <div className="App">
        <h1>Weather App</h1>
          <input type="text" placeholder="search for a city" onChange={(e) => setCityName(e.target.value)}/>
            <button onClick={searchTempBTn} id="btn">Search</button>
            <h3>{Weather?.name} {Weather?.sys?.country}</h3>
            <h3>{Math.floor(Weather?.main?.temp)} &#8451;</h3>
    </div>
  );
}

export default App;

