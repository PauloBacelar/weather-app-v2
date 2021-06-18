import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
  }

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter a city</label>
            <input
              type="text"
              placeholder="Search for a city and country. e.g. London,GB"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
