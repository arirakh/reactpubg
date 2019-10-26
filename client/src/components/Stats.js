import React, { Component } from 'react'

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isSoloChecked: false,
      isDuoChecked: false,
      isSquadChecked: false,
      data: null,
      error: null,
    };

    this.OnFppCheck = this.OnFppCheck.bind(this);
  }

  OnFppCheck(e) {
    const target = e.target.id

    if (target === 'Solo') {
      this.setState(prevState => ({ isSoloChecked: !prevState.isSoloChecked }));
    } else if (target === 'Duo') {
      this.setState(prevState => ({ isDuoChecked: !prevState.isDuoChecked }));
    } else if (target === 'Squad') {
      this.setState(prevState => ({ isSquadChecked: !prevState.isSquadChecked }));
    } else {
      this.setState({
        isSoloChecked: false,
        isDuoChecked: false,
        isSquadChecked: false,
      });
    }
  }

  render() {
    let props = this.props;
    let bgColor, wins, top10s, longestKill, headshot, mostKills, killStreaks, kills, totalSurvived;

    const toMinutes = (value) => {
      if (!value) {
        return 0;
      } else {
        return Math.floor(value / 60) + "." + (value % 60 ? (value % 60).toFixed(0) : '00');
      }
    }

    if (props.statsName === 'Solo') {
      bgColor = 'bg-danger';

      if (!this.state.isSoloChecked) {

        wins = props.solo.roundsPlayed > 0 ? ((props.solo.wins / props.solo.roundsPlayed) * 100).toFixed(2) : 0;
        top10s = props.solo.roundsPlayed > 0 ? ((props.solo.top10s / props.solo.roundsPlayed) * 100).toFixed(2) : 0;
        longestKill = props.solo.longestKill > 0 ? props.solo.longestKill.toFixed(2) : 0;
        headshot = props.solo.kills > 0 ? ((props.solo.headshotKills / props.solo.kills) * 100).toFixed(2) : 0;
        mostKills = props.solo.roundMostKills;
        killStreaks = props.solo.maxKillStreaks;
        kills = props.solo.kills;
        totalSurvived = toMinutes(props.solo.timeSurvived / props.solo.roundsPlayed);
      } else {
        wins = props.soloFpp.roundsPlayed > 0 ? ((props.soloFpp.wins / props.soloFpp.roundsPlayed) * 100).toFixed(2) : 0;
        top10s = props.soloFpp.roundsPlayed > 0 ? ((props.soloFpp.top10s / props.soloFpp.roundsPlayed) * 100).toFixed(2) : 0;
        longestKill = props.soloFpp.longestKill > 0 ? props.soloFpp.longestKill.toFixed(2) : 0;
        headshot = props.soloFpp.kills > 0 ? ((props.soloFpp.headshotKills / props.soloFpp.kills) * 100).toFixed(2) : 0;
        mostKills = props.soloFpp.roundMostKills;
        killStreaks = props.soloFpp.maxKillStreaks;
        kills = props.soloFpp.kills;
        totalSurvived = toMinutes(props.soloFpp.timeSurvived / props.soloFpp.roundsPlayed);
      }
    } else if (props.statsName === 'Duo') {
      bgColor = 'bg-warning';

      if (!this.state.isDuoChecked) {
        wins = props.duo.roundsPlayed > 0 ? ((props.duo.wins / props.duo.roundsPlayed) * 100).toFixed(2) : 0;
        top10s = props.duo.roundsPlayed > 0 ? ((props.duo.top10s / props.duo.roundsPlayed) * 100).toFixed(2) : 0;
        longestKill = props.duo.longestKill > 0 ? props.duo.longestKill.toFixed(2) : 0;
        headshot = props.duo.kills > 0 ? ((props.duo.headshotKills / props.duo.kills) * 100).toFixed(2) : 0;
        mostKills = props.duo.roundMostKills;
        killStreaks = props.duo.maxKillStreaks;
        kills = props.duo.kills;
        totalSurvived = toMinutes(props.duo.timeSurvived / props.duo.roundsPlayed);
      } else {
        wins = props.duoFpp.roundsPlayed > 0 ? ((props.duoFpp.wins / props.duoFpp.roundsPlayed) * 100).toFixed(2) : 0;
        top10s = props.duoFpp.roundsPlayed > 0 ? ((props.duoFpp.top10s / props.duoFpp.roundsPlayed) * 100).toFixed(2) : 0;
        longestKill = props.duoFpp.longestKill > 0 ? props.duoFpp.longestKill.toFixed(2) : 0;
        headshot = props.duoFpp.kills > 0 ? ((props.duoFpp.headshotKills / props.duoFpp.kills) * 100).toFixed(2) : 0;
        mostKills = props.duoFpp.roundMostKills;
        killStreaks = props.duoFpp.maxKillStreaks;
        kills = props.duoFpp.kills;
        totalSurvived = toMinutes(props.duoFpp.timeSurvived / props.duoFpp.roundsPlayed);
      }
    } else if (props.statsName === 'Squad') {
      bgColor = 'bg-success';

      if (!this.state.isSquadChecked) {
        wins = props.squad.roundsPlayed > 0 ? ((props.squad.wins / props.squad.roundsPlayed) * 100).toFixed(2) : 0;
        top10s = props.squad.roundsPlayed > 0 ? ((props.squad.top10s / props.squad.roundsPlayed) * 100).toFixed(2) : 0;
        longestKill = props.squad.longestKill > 0 ? props.squad.longestKill.toFixed(2) : 0;
        headshot = props.squad.kills > 0 ? ((props.squad.headshotKills / props.squad.kills) * 100).toFixed(2) : 0;
        mostKills = props.squad.roundMostKills;
        killStreaks = props.squad.maxKillStreaks;
        kills = props.squad.kills;
        totalSurvived = toMinutes(props.squad.timeSurvived / props.squad.roundsPlayed);
      } else {
        wins = props.squadFpp.roundsPlayed > 0 ? ((props.squadFpp.wins / props.squadFpp.roundsPlayed) * 100).toFixed(2) : 0;
        top10s = props.squadFpp.roundsPlayed > 0 ? ((props.squadFpp.top10s / props.squadFpp.roundsPlayed) * 100).toFixed(2) : 0;
        longestKill = props.squadFpp.longestKill > 0 ? props.squadFpp.longestKill.toFixed(2) : 0;
        headshot = props.squadFpp.kills > 0 ? ((props.squadFpp.headshotKills / props.squadFpp.kills) * 100).toFixed(2) : 0;
        mostKills = props.squadFpp.roundMostKills;
        killStreaks = props.squadFpp.maxKillStreaks;
        kills = props.squadFpp.kills;
        totalSurvived = toMinutes(props.squadFpp.timeSurvived / props.squadFpp.roundsPlayed);
      }
    } else {
      bgColor = wins = top10s = longestKill = headshot = mostKills = killStreaks = kills = totalSurvived = null;
    }

    return (
      <div>
        <div className="card border border-white mx-1">
          <div className={"card-header text-white " + bgColor} >
            <div className="row">
              <div className="col-6">
                <strong>{props.statsName}</strong>
              </div>
              <div className="col-6 text-right">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id={props.statsName} onChange={this.OnFppCheck} />
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
                  <td className="text-right">{wins} %</td>
                </tr>

                <tr>
                  <th>Top 10 %</th>
                  <td className="text-right">{top10s} %</td>
                </tr>

                <tr>
                  <th>Longest Kill</th>
                  <td className="text-right">{longestKill} m</td>
                </tr>

                <tr>
                  <th>Headshot</th>
                  <td className="text-right">{headshot} %</td>
                </tr>

                <tr>
                  <th>Most Kills</th>
                  <td className="text-right">{mostKills}</td>
                </tr>

                <tr>
                  <th>Kill Streak</th>
                  <td className="text-right">{killStreaks}</td>
                </tr>

                <tr>
                  <th>Total Kills</th>
                  <td className="text-right">{kills}</td>
                </tr>

                <tr>
                  <th>Avg. survived time</th>
                  <td className="text-right">{totalSurvived}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div >
    )
  }
}

export default Stats;