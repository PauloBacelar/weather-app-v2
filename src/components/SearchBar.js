import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui transparent left icon input">
        <input type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
    );
  }
}

export default SearchBar;
