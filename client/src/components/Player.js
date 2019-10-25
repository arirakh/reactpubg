import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Player extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <div className="row mt-4">
        <div className="col-md-8 px-0">
          <h2 className="text-white"><strong>PUBG Player Stats</strong></h2>
        </div>

        <div className="col-md-4 px-0 text-right">
          <Link className="btn btn-warning" to="/">Back</Link>
        </div>

        <div className="col-md-12 p-4 border border-white text-center mb-3">
          <h2 className="text-white"><strong>Player Name: <span className="text-warning"></span></strong></h2>
          <h6 className="text-white"><strong>Platform: steam</strong></h6>
        </div>

        <div className="col-md-4 p-0">
          <div className="card border border-danger mr-2">
            <div className="card-header bg-danger text-white">
              <div className="row">
                <div className="col-6">
                  <strong>Solo</strong>
                </div>
                <div className="col-6 text-right">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="fppcheck" />
                    <label className="form-check-label" htmlFor="fppcheck">FPP</label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <table className="table table-sm table-striped">
                <tbody>
                  <tr>
                    <th>Wins %</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Top 10 %</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Longest Kill</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Headshot</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Most Kills</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Kill Streak</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Total Kills</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Avg. survived time</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4 p-0">
          <div className="card border border-warning mx-1">
            <div className="card-header bg-warning text-white">
              <div className="row">
                <div className="col-6">
                  <strong>Duo</strong>
                </div>
                <div className="col-6 text-right">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="fppcheck" />
                    <label className="form-check-label" htmlFor="fppcheck">FPP</label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <table className="table table-sm table-striped">
                <tbody>
                  <tr>
                    <th>Wins %</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Top 10 %</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Longest Kill</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Headshot</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Most Kills</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Kill Streak</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Total Kills</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Avg. survived time</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4 p-0">
          <div className="card border border-success ml-2">
            <div className="card-header bg-success text-white">
              <div className="row">
                <div className="col-6">
                  <strong>Squad</strong>
                </div>
                <div className="col-6 text-right">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="fppcheck" />
                    <label className="form-check-label" htmlFor="fppcheck">FPP</label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <table className="table table-sm table-striped">
                <tbody>
                  <tr>
                    <th>Wins %</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Top 10 %</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Longest Kill</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Headshot</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Most Kills</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Kill Streak</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Total Kills</th>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Avg. survived time</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;
