import "../styles/App.css";
import React from "react";
import api from "../api/api";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null,
      userAllowed: false,
      country: "",
      city: "",
      weatherData: [],
    };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((data) => {
      this.setState({
        lat: data.coords.latitude,
        lon: data.coords.longitude,
        userAllowed: true,
      });

      this.getWeather();
    });
  }

  getWeather = () => {
    api
      .get(
        `/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=b201157d2845f79ad6e02f582e930d6f`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ city: data.name, country: data.sys.country });
      });

    api
      .get(
        `/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=b201157d2845f79ad6e02f582e930d6f`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ weatherData: data.daily });
      });
  };

  render() {
    if (this.state.userAllowed) {
      return (
        <div>
          <div>
            <div className="place">
              <h1>
                {this.state.city}, {this.state.country}
              </h1>
              {this.state.country ? (
                <img
                  src={`https://www.countryflags.io/${this.state.country.toLowerCase()}/flat/32.png`}
                  alt={`${this.state.country} flag`}
                />
              ) : null}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Spinner message="Loading... please allow access to your location" />
      );
    }
  }
}

export default App;
