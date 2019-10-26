import React from 'react'

const Stats = (props) => {
  console.log(props);

  let bgColor, wins, top10s, longestKill, headshot, mostKills, killStreaks, kills, totalSurvived;

  if (props.statsName === 'Solo') {
    bgColor = 'bg-danger';
    wins = props.solo.roundsPlayed > 0 ? (props.solo.wins / props.solo.roundsPlayed) * 100 : 0;
    top10s = props.solo.roundsPlayed > 0 ? (props.solo.top10s / props.solo.roundsPlayed) * 100 : 0;
    longestKill = props.solo.longestKill > 0 ? props.solo.longestKill.toFixed(2) : 0;
    headshot = props.solo.kills > 0 ? (props.solo.headshotKills / props.solo.kills) * 100 : 0;
    mostKills = props.solo.roundMostKills;
    killStreaks = props.solo.maxKillStreaks;
    kills = props.solo.kills;
  } else if (props.statsName === 'Duo') {
    bgColor = 'bg-warning';
    wins = props.duo.roundsPlayed > 0 ? (props.duo.wins / props.duo.roundsPlayed) * 100 : 0;
    top10s = props.duo.roundsPlayed > 0 ? (props.duo.top10s / props.duo.roundsPlayed) * 100 : 0;
    longestKill = props.duo.longestKill > 0 ? props.duo.longestKill.toFixed(2) : 0;
    headshot = props.duo.kills > 0 ? (props.duo.headshotKills / props.dup.kills) * 100 : 0;
    mostKills = props.duo.roundMostKills;
    killStreaks = props.duo.maxKillStreaks;
    kills = props.duo.kills;
  } else {
    bgColor = 'bg-success';
    wins = props.squad.roundsPlayed > 0 ? (props.squad.wins / props.squad.roundsPlayed) * 100 : 0;
    top10s = props.squad.roundsPlayed > 0 ? (props.squad.top10s / props.squad.roundsPlayed) * 100 : 0;
    longestKill = props.squad.longestKill > 0 ? props.squad.longestKill.toFixed(2) : 0;
    headshot = props.squad.kills > 0 ? (props.squad.headshotKills / props.squad.kills) * 100 : 0;
    mostKills = props.squad.roundMostKills;
    killStreaks = props.squad.maxKillStreaks;
    kills = props.squad.kills;
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
                <td className="text-right"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default Stats;
