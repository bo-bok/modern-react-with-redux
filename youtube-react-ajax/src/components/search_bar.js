import React, { Component } from 'react';

class Searchbar extends Component {

  constructor(props) {
    super(props);

    this.state =  {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default Searchbar; //just export the searchbar

// which component should be responsible for grabbing the data from youtube api - because all components will need to know about it
// answer = downward data flow. This means that only the parentmost component should be responsible for collecting data.
