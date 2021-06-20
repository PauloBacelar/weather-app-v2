import "../styles/Weather.css";
import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-card">
        <div>
          <div className="place">
            <h1>
              {this.props.weatherData.city}, {this.props.weatherData.country}
            </h1>
            {this.props.weatherData.country ? (
              <img
                src={`https://www.countryflags.io/${this.props.weatherData.country.toLowerCase()}/flat/32.png`}
                alt={`${this.props.weatherData.country} flag`}
                className="country-flag"
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
