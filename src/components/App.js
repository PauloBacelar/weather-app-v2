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
        console.log(data);
      });
  }

  render() {
    if (this.state.userAllowed) {
      console.log(this.state.lat);
      console.log(this.state.lon);
      return (
        <div>
          <div>
            <SearchBar />
          </div>

          <div></div>
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
