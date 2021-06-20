import "../styles/Weather.css";
import WeatherHeader from "./WeatherHeader";
import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-card">
        <WeatherHeader data={this.props.weather}/>
      </div>
    );
  }
}

export default Weather;
