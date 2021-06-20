import "../styles/Weather.css";
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

          <div className="current-weather-data"></div>
        </div>
      </div>
    );
  }
}

export default Weather;
