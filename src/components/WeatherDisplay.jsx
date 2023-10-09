const WeatherDisplay = ({ weather }) => {
  return (
    <div className="card p-4 rounded-4 bg-dark opacity-75">
      <h1 className="text-white text-center">
        {weather.city}, {weather.country}
      </h1>
      <img
        src={weather.icon}
        alt={weather.conditionText}
        style={{ margin: "0 auto" }}
      />
      <h2 className="text-white text-center">{weather.temp} ºC</h2>
      <h3 className="text-white text-center">{weather.conditionText}</h3>
    </div>
  );
};

export default WeatherDisplay;
