import React from "react";

class WeatherHeader extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${this.props.data.currentWeather.weather[0].icon}@2x.png`}
              alt={this.props.data.currentWeather.weather[0].description}
              className="weather-icon"
            />
          </div>

          <div className="text">
            <h1>
              {Math.round(this.props.data.currentWeather.temp)}&#176;C -{" "}
              {this.props.data.currentWeather.weather[0].main}
            </h1>

            <div className="place">
              <p>
                {this.props.data.city}, {this.props.data.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherHeader;
