import React, { useState } from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState({})
  const [location, setlocation] = useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e8b5a223c70430290314fa24560fc4f1&units=metric`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setlocation('')
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="search_wrapper">
          <input value={location} onChange={event => setlocation(event.target.value)} onKeyPress={searchLocation} placeholder='Search Location' type='text' />
        </div>

        <div className="header">

            <div className="location">
              <h2>{data.name}</h2>
            </div>
            <div className="teamprature_wrapper" >
              <div className="temprature">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <img src={'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'} width='50px' height='50px' alt=''/> : null}
                {data.weather ? <div>{data.weather[0].main}</div> : null}
                
              </div>
            </div>

        </div>

        <div className="footer">

          <div className="feels_like">
            {data.main ? <h2>{data.main.feels_like.toFixed()}°C</h2> : null}
            <div>Feels Like</div>
          </div>
          <div className="humidity">
            {data.main ? <h2>{data.main.humidity.toFixed()}%</h2> : null}
            <div>Humidity</div>
          </div>
          <div className="wind">
            {data.wind ? <h2>{data.wind.speed.toFixed()}MPH</h2> : null}
            <div>Wind Speed</div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
