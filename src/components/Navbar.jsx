import logo from "../assets/logo.png";

const Navbar = ({ onSubmit, loading, error, city, setCity }) => {
  return (
    <nav className="navbar bg-body-light my-3 mx-5">
      <div className="container d-flex flex-column align-items-center">
        <div className="text-center">
          <img
            src={logo}
            alt="WeatherToday"
            width="180"
            height="90"
            className="mb-3"
          />
        </div>

        <form onSubmit={onSubmit}>
          <div className="text-center">
            <div className="input-group">
              <input
                className={`form-control ${error.error ? "is-invalid" : ""}`}
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {error.error && (
                <div className="invalid-feedback">{error.message}</div>
              )}
              <button
                className="btn btn-outline-secondary"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <i className="fa-solid fa-spinner"></i>
                ) : (
                  <i className="fa-solid fa-magnifying-glass"></i>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
