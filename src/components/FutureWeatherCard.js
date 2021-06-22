import React from "react";

class FutureWeatherCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div class="card-body-container">
        <p>in {this.props.futureTime}h</p>
      </div>
    );
  }
}

export default FutureWeatherCard;
