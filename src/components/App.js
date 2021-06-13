import React from "react";
import api from "../api/api";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    api
      .get("/weather", {
        params: {
          q: "London",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  render() {
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
