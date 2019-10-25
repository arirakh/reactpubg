import React from 'react'

const Stats = (props) => {
  console.log(props);

  let bgColor;
  if (props.statsName === 'Solo') {
    bgColor = 'bg-danger';
  } else if (props.statsName === 'Duo') {
    bgColor = 'bg-warning';
  } else {
    bgColor = 'bg-success';
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
    </div >
  );
};

export default Stats;
