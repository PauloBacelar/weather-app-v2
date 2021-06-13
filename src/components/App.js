import React from "react";
import api from "../api/api";

class App extends React.Component {
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
    return <h1>Hello, World!</h1>;
  }
}

export default App;
