import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { WiHumidity, WiStrongWind, WiBarometer, WiCloud, WiSunrise, WiSunset } from 'react-icons/wi';
import BgImg from './assets/bg.jpg'

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return setError('Please enter a city name.');
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(response.data);
      setCity('');
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start  bg-cover bg-center bg-no-repeat p-3" style={{ backgroundImage: `url(${BgImg})` }} >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-500 mb-4">
        Weather App
      </motion.h1>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white py-3  rounded-xl shadow-xl text-black w-full max-w-sm text-center">
        <input type="text" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} className="w-1/2 p-2 border-2 border-blue-400 capitalize font-bold text-lg rounded-lg  focus:outline-none focus:ring-1 focus:ring-blue-400" />
        <button onClick={fetchWeather} className="w-1/3 bg-blue-500 text-white font-medium text-lg ms-4 py-2 rounded-lg hover:bg-blue-600">Get Weather</button> {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>

      {/* weather card  */}
      {weather && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 bg-white/25 backdrop-blur-sm px-6 sm:px-10 py-4 rounded-3xl shadow-2xl max-w-4xl text-center w-full">

          {/* City Name & Weather Description */}
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">{weather.name}, {weather.sys.country}</h2>
          <p className="text-md sm:text-lg text-gray-700 capitalize mt-2">{weather.weather[0].description}</p>

          {/* Weather Icon */}
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="w-16 sm:w-24 h-14 sm:h-24 mx-auto"
          />

          {/* Temperature */}
          <motion.div
            className="text-4xl sm:text-6xl font-bold text-blue-500"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}>
            {Math.round(weather.main.temp)}°C
          </motion.div>

          {/* Weather Details (Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-md sm:text-md mt-5">
            <div className="bg-white bg-white/50 backdrop-blur-sm overflow-hidden border border-blue-300 px-4 py-1 rounded-xl shadow-lg flex items-center gap-2">
              <WiHumidity size={24} className="text-blue-400 sm:size-16" /> Humidity: {weather.main.humidity}%
            </div>
            <div className="bg-white bg-white/50 backdrop-blur-sm overflow-hidden border border-blue-300 px-4 py-1 rounded-xl shadow-lg flex items-center gap-2">
              <WiBarometer size={24} className="text-yellow-400 sm:size-16" /> Pressure: {weather.main.pressure} hPa
            </div>
            <div className="bg-white bg-white/50 backdrop-blur-sm overflow-hidden border border-blue-300 px-4 py-1 rounded-xl shadow-lg flex items-center gap-2">
              <WiStrongWind size={24} className="text-green-400 sm:size-16" /> Wind: {weather.wind.speed} m/s
            </div>
            <div className="bg-white bg-white/50 backdrop-blur-sm overflow-hidden border border-blue-300 px-4 py-1 rounded-xl shadow-lg flex items-center gap-2">
              <WiCloud size={24} className="text-gray-300 sm:size-16" /> Cloudiness: {weather.clouds.all}%
            </div>
            <div className="bg-white bg-white/50 backdrop-blur-sm overflow-hidden border border-blue-300 px-4 py-1 rounded-xl shadow-lg flex items-center gap-2">
              <WiSunrise size={24} className="text-orange-400 sm:size-16" /> Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
            </div>
            <div className="bg-white bg-white/50 backdrop-blur-sm overflow-hidden border border-blue-300 px-4 py-1 rounded-xl shadow-lg flex items-center gap-2">
              <WiSunset size={24} className="text-red-400 sm:size-16" /> Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
            </div>
          </div>

          {/* Location Info */}
          <p className="text-gray-800 mt-4 text-md sm:text-md">Latitude: {weather.coord.lat} | Longitude: {weather.coord.lon}</p>
          <p className="text-gray-800 text-md sm:text-md">Timezone: UTC {weather.timezone / 3600} hours</p>
        </motion.div>
      )}

    </div>
  )
}
