import React from "react";
import Spinner from "./Spinner";

class FutureWeatherCard extends React.Component {
  render() {
    console.log(this.props);
    if ("weather" in this.props.futureWeather) {
      return (
        <div className="single-card">
          <p>in {this.props.futureTime}h</p>
          <img
            src={`http://openweathermap.org/img/wn/${this.props.futureWeather.weather[0].icon}.png`}
            alt={this.props.futureWeather.weather[0].description}
          />
          <p>{Math.round(this.props.futureWeather.temp)}&#176;</p>
        </div>
      );
    }

    return (
      <Spinner message="Loading... Please allow access to your location" />
    );
  }
}

export default FutureWeatherCard;
