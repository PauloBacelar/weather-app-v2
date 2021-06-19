import "../styles/App.css";
import React from "react";
import api from "../api/api";
import SearchBar from "./SearchBar";
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
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((data) => {
      this.setState({
        lat: data.coords.latitude,
        lon: data.coords.longitude,
        userAllowed: true,
      });
    });

    api
      .get(
        "/weather?lat=-14.7981&lon=-39.099993999999995&appid=b201157d2845f79ad6e02f582e930d6f"
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ city: data.name, country: data.sys.country });
      });

    api
      .get(
        "/onecall?lat=-14.792269899999999&lon=-39.0994041&appid=b201157d2845f79ad6e02f582e930d6f"
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ weatherData: data.daily });
      });
  }

  render() {
    if (this.state.userAllowed) {
      return (
        <div>
          <div>
            <SearchBar />
          </div>

          <div>
            <h1>
              {this.state.city}, {this.state.country}{" "}
              <i className={`${this.state.country.toLowerCase()} flag`}></i>
            </h1>
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
