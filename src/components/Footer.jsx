const Footer = () => {
  return (
    <footer className="bg-body-light text-white">
      <div className="container pt-5 pb-2">
        <p className="text-secondary text-center">
          Powered by:{" "}
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Weather API"
          >
            WeatherAPI.com
          </a>
        </p>
        <p className="text-secondary text-center">
          WeatherToday made by Sandra Rodríguez
        </p>
        <div className="text-center text-secondary">
          <a
            href="www.linkedin.com/in/sandra-rodriguez-reyes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary me-3"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/srdgz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
