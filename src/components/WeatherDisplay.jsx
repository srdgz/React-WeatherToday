import moment from "moment";

const WeatherDisplay = ({ weather }) => {
  const formattedLocalTime = moment(weather.last_updated).format("HH:mm");
  const formattedDate = moment(weather.last_updated).format("DD/MM/YYYY");
  return (
    <div className="card p-4 rounded-4 bg-dark opacity-75">
      <h1 className="text-white text-center">
        {weather.city}, {weather.country}
      </h1>
      <p className="text-white text-center">
        Last updated: {formattedDate}, at {formattedLocalTime}h.
      </p>
      <img
        src={weather.icon}
        alt={weather.conditionText}
        style={{ margin: "0 auto" }}
      />
      <h2 className="text-white text-center">{weather.temp} ºC</h2>
      <h3 className="text-white text-center">{weather.conditionText}</h3>
      <div className="container px-4 text-center text-white">
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="mb-2">
              <i className="fa-solid fa-droplet fa-lg me-2"></i>Humidity:{" "}
              {weather.humidity}%
            </div>
            <div className="mb-1">
              <i className="fa-solid fa-wind fa-lg me-2"></i>Wind:{" "}
              {weather.wind}
              km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
