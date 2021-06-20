import "../styles/Weather.css";
import WeatherHeader from "./WeatherHeader";
import React from "react";

class Weather extends React.Component {
  render() {
    console.log(this.props.weather.currentWeather);
    return (
      <div className="weather-card">
        <div className="header">
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${this.props.weather.currentWeather.weather[0].icon}@2x.png`}
              alt={this.props.weather.currentWeather.weather[0].description}
              className="weather-icon"
            />
          </div>

          <div className="current-weather-data">
            <h1>
              {this.props.weather.currentWeather.temp}&#176;C -{" "}
              {this.props.weather.currentWeather.weather[0].main}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
