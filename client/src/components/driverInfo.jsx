import React from 'react';

class DriverInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    var driverInfo = this.props.driverInfo;
    return (
    <div id="driverInfo">
      <table id="driverInfo">
        <tbody>
          <tr>
            <th>Number</th>
            <td>{driverInfo.permanentNumber}</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>{driverInfo.nationality}</td>
          </tr>
          <tr>
            <th>DOB</th>
            <td>{driverInfo.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Wiki</th>
            <td><a href={driverInfo.url}>wiki</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default DriverInfo;