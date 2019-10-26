import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios/dist/axios';
import Stats from './Stats';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null,
      error: null,
    }
  }

  async componentDidMount() {
    const { params } = this.props.match;
    this.setState({ isLoading: true });

    try {
      const response = await axios.get(`http://localhost:5000/api/v1/player/steam/${params.playerName}`);

      this.setState({
        isLoading: false,
        data: response.data
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err
      });
    }
  }

  render() {
    let titleStats, dataStats;
    const playerData = this.state.data;

    if (this.state.isLoading) {
      titleStats = <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>;

      dataStats = <div className="row text-center">
        <div className="col-md-4 p-0">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="col-md-4 p-0">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="col-md-4 p-0">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>;
    } else {
      if (playerData) {
        titleStats = <div><h2 className="text-white"><strong>Player Name: <span className="text-warning">{playerData.playerInfo.name}</span></strong></h2> <h6 className="text-white"><strong>Platform: steam</strong></h6></div>;

        dataStats = <div className="row">
          <div className="col-lg-4 p-0">
            <Stats statsName="Solo" solo={playerData.playerStats.solo} soloFpp={playerData.playerStats['solo-fpp']} />
          </div>

          <div className="col-lg-4 p-0">
            <Stats statsName="Duo" duo={playerData.playerStats.duo} duoFpp={playerData.playerStats['duo-fpp']} />
          </div>

          <div className="col-lg-4 p-0">
            <Stats statsName="Squad" squad={playerData.playerStats.squad} squadFpp={playerData.playerStats['squad-fpp']} />
          </div>
        </div>;
      } else {
        titleStats = <div><h2 className="text-danger"><strong>Player Not Found</strong></h2></div>;
        dataStats = null;
      }
    }

    return (
      <div>
        <div className="row mt-4">
          <div className="col-sm-8 px-0">
            <h2 className="text-white"><strong>PUBG Player Stats</strong></h2>
          </div>

          <div className="col-sm-4 px-0 text-right">
            <Link className="btn btn-warning" to="/">Back</Link>
          </div>

          <div className="col-md-12 p-4 border border-white rounded text-center my-3">
            {titleStats}
          </div>
        </div>

        {dataStats}
      </div>
    )
  }
}

export default Player;
