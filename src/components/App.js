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
  }

  render() {
    if (this.state.userAllowed) {
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
