import React from "react";
import FutureWeatherCard from "./FutureWeatherCard";

class WeatherBody extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {
        in6h: [],
        in12h: [],
        in18h: [],
        in24h: [],
      },
    };
  }

  componentDidMount() {
    this.setState({
      weather: {
        in6h: this.props.futureWeather[this.props.time + 6],
        in12h: this.props.futureWeather[this.props.time + 12],
        in18h: this.props.futureWeather[this.props.time + 18],
        in24h: this.props.futureWeather[this.props.time + 24],
      },
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <FutureWeatherCard
          futureTime={this.props.time + 6}
          futureWeather={this.state.weather.in6h}
        />
        <FutureWeatherCard
          futureTime={this.props.time + 12}
          futureWeather={this.state.weather.in12h}
        />
        <FutureWeatherCard
          futureTime={this.props.time + 18}
          futureWeather={this.state.weather.in18h}
        />
        <FutureWeatherCard
          futureTime={this.props.time + 24}
          futureWeather={this.state.weather.in24h}
        />
      </div>
    );
  }
}

export default WeatherBody;
