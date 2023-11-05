import { useState } from "react";
import Navbar from "./components/Navbar";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

import fetchWeatherData from "./services/fetchWeatherData";
export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
    wind: "",
    humidity: "",
    last_updated: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: "",
    });
    try {
      if (!city.trim()) {
        throw { message: "Por favor, añade una ciudad" };
      }

      const weatherData = await fetchWeatherData(city);
      setWeather(weatherData);
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  return (
    <>
      <Navbar
        onSubmit={onSubmit}
        loading={loading}
        error={error}
        city={city}
        setCity={setCity}
      />
      <div className="jumbotron">
        {weather.city && <WeatherDisplay weather={weather} />}
      </div>
      <Footer />
    </>
  );
}
