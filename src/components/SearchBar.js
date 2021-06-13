import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter a city</label>
            <input type="text" placeholder="Search for weather" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
