import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    humidity: "",
    windSpeed: "",
    temperature: "",
    location: "",
  });

  const api_key = '017522c0f92084695d0794f902c9680f';

  const search = async () => {
    if (city === "") {
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
      });
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-stone-300 to-indigo-600 bg-cover bg-center flex flex-col items-center gap-10 p-4 md:p-8">
      <h1 className="font-bold text-4xl md:text-5xl font-serif text-white">WEATHER APP</h1>

      <div className="w-full md:max-w-md bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg flex flex-col justify-center items-center gap-6 p-4">
        <div className="text-xl flex gap-2 w-full">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="p-2 border border-gray-300 rounded-full focus:outline-none w-full"
          />
          <div
            className="search-icon h-9 w-12 flex justify-center items-center text-3xl bg-white rounded-full cursor-pointer"
            onClick={search}
          >
            <AiOutlineSearch />
          </div>
        </div>

        <div className="fetch-temp w-full flex flex-col gap-1 justify-center items-center">
          <div className="wetherimage">
            {/* Add your weather image here */}
          </div>
          <h1 className="wethertemp text-4xl md:text-6xl text-white font-semibold font-sans">{weatherData.temperature}°C</h1>
          <span className="wether_location text-white font-sans font-medium text-xl md:text-2xl">
            {weatherData.location}
          </span>
        </div>

        <div className="data-container w-full flex flex-col md:flex-row justify-between px-4 items-center text-white font-sans font">
          <div className="element mb-4 md:mb-0">
            <div className="sm-icons flex justify-center items-center gap-2">
              <div className="data text-center">
                <div className="humidity-percentage">{weatherData.humidity}%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
          </div>

          <div className="element">
            <div className="sm-icons flex justify-center items-center gap-2">
              <img src="" alt="" className="icon" />
              <div className="data text-center">
                <div className="Wind_speed">{weatherData.windSpeed} km/hr</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
