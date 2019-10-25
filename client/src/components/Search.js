import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      errorInput: false
    };

    this.inputPlayerName = this.inputPlayerName.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  inputPlayerName(e) {
    this.setState({ playerName: e.target.value });
  }

  onSearch = (e) => {
    e.preventDefault();
    if (this.state.playerName === '') {
      this.setState({ errorInput: true });
    } else {
      this.setState({ errorInput: false });
      this.props.history.push(`/player/${this.state.playerName}`);
    }
  }

  render() {
    return (
      <div className="mt-4 p-4 border border-light rounded">
        <h2 className="text-white text-center"><strong>PUBG Player Tracker</strong></h2>
        <form className="m-3">
          <input type="text" className="form-control" placeholder="Enter PUBG Player Name" onChange={this.inputPlayerName} />
          {this.state.errorInput ? (<p className="text-danger mt-1">Player name must not empty</p>) : null}
          <button type="submit" className="btn btn-warning btn-block mt-3" onClick={this.onSearch}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;