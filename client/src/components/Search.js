import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };

    this.inputPlayerName = this.inputPlayerName.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  inputPlayerName(e) {
    this.setState({ playerName: e.target.value });
  }

  onSearch = (e) => {
    e.preventDefault();
    console.log(this.state.playerName)
  }

  render() {
    return (
      <div className="mt-4 p-4 border border-light rounded">
        <h2 className="text-white text-center"><strong>PUBG Player Tracker</strong></h2>
        <form className="m-3">
          <input type="text" className="form-control mb-3" placeholder="Enter PUBG Player Name" onChange={this.inputPlayerName} />
          <button type="submit" className="btn btn-warning btn-block" onClick={this.onSearch}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;