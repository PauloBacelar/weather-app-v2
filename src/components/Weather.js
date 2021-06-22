import "../styles/Weather.css";
import WeatherHeader from "./WeatherHeader";
import WeatherBody from "./WeatherBody";
import React from "react";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="weather-card">
        <WeatherHeader data={this.props.weather} />
        <WeatherBody
          futureWeather={this.props.weather.weatherData}
          time={this.props.weather.hours}
        />
      </div>
    );
  }
}

export default Weather;
