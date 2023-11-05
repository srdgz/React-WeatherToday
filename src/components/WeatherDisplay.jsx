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
        <div className="row gx-5 mt-1 d-flex justify-content-center">
          <div className="col">
            <div className="p-1">
              <i className="fa-solid fa-droplet fa-xl me-2"></i>Humidity:{" "}
              {weather.humidity}%
            </div>
          </div>
          <div className="col">
            <div className="p-2">
              <i className="fa-solid fa-wind fa-xl me-2"></i>Wind:{" "}
              {weather.wind}km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
