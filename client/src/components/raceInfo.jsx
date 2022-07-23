import React from 'react';

class RaceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    var raceInfo = this.props.raceInfo;
    return (
    <div id="raceInfo">
      <table id="raceInfo">
        <tbody>
          {this.props.raceInfo.Races.map(race => {
            return (
              <tr key={race.round}>
                <th>{race.raceName}</th>
                <td>{race.Results[0].position}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
  }
}

export default RaceInfo;