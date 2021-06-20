import "../styles/Weather.css";
import WeatherHeader from "./WeatherHeader";
import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-card">
        <div className="header-container">
          <div className="header">
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${this.props.weather.currentWeather.weather[0].icon}@2x.png`}
                alt={this.props.weather.currentWeather.weather[0].description}
                className="weather-icon"
              />
            </div>

            <div className="text">
              <h1>
                {Math.round(this.props.weather.currentWeather.temp)}&#176;C -{" "}
                {this.props.weather.currentWeather.weather[0].main}
              </h1>

              <div className="place">
                <p>
                  {this.props.weather.city}, {this.props.weather.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
