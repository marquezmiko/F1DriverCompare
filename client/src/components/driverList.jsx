import React from 'react';
import Driver from './driver.jsx';

class DriverList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      driverOne: this.props.drivers[0],
      driverTwo: this.props.drivers[1]
    }
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>
        <h3>Drivers</h3>
        <ul>
          <div id="driverOne">
            <Driver key={this.state.driverOne.id} name={this.state.driverOne.name} pic={this.state.driverOne.picture} twitter={this.state.driverOne.twitter}/>
          </div>
          <div id="driverTwo">
            <Driver key={this.state.driverTwo.id} name={this.state.driverTwo.name} pic={this.state.driverTwo.picture} twitter={this.state.driverTwo.twitter}/>
          </div>
          {/* {props.drivers.map(driver => {
            return (
              <div id="driverOne">

              </div>
              <Driver key={driver.id} name={driver.name}/>
            )
          })} */}
        </ul>
      </div>
    )
  }
}

export default DriverList;