import "../styles/Weather.css";
import WeatherHeader from "./WeatherHeader";
import WeatherBody from "./WeatherBody";
import React from "react";
import SearchBar from "./SearchBar";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-card">
        <WeatherHeader data={this.props.weather} />
        <WeatherBody futureWeather={this.props.weather.weatherData} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Weather;
