import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="mt-4 p-4 border border-light rounded">
        <h2 className="text-white text-center">PUBG Player Tracker</h2>
        <form className="m-2">
          <input type="text" className="form-control mb-3" placeholder="Enter PUBG Player Name" />
          <button type="submit" className="btn btn-warning btn-block">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;