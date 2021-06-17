import React from "react";
import api from "../api/api";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        this.setState({
          lat: data.coords.latitude,
          lon: data.coords.longitude,
        });
      },
      () => {
        console.log("Error!");
      }
    );
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <SearchBar />
        </div>

        <div>
          <h1>Hello, World!</h1>
        </div>
      </div>
    );
  }
}

export default App;
