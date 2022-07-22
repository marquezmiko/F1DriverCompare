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
        <thead>
          <tr>
            <th>Number</th>
            <th>Nationality</th>
            <th>DOB</th>
            <th>Wiki</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{driverInfo.permanentNumber}</td>
            <td>{driverInfo.nationality}</td>
            <td>{driverInfo.dateOfBirth}</td>
            <td>{driverInfo.url}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default DriverInfo;