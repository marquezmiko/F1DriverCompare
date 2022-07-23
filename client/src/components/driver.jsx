import React from 'react';
import DriverInfo from './DriverInfo.jsx';
import RaceInfo from './RaceInfo.jsx';
import gaslyPhoto from '../images/gasly.png';
import tsunodaPhoto from '../images/tsunoda.png';

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      driverInfoIsLoaded: false,
      raceInfoIsLoaded: false,
      driverItems: [],
      raceItems: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ driver: this.props.name})
    };
    fetch('http://localhost:8080/driver', requestOptions)
    .then(res => res.json())
    .then((data) => {
      // console.log('JSX WORLD: ' + JSON.stringify(data));
      this.setState({
        driverInfoIsLoaded: true,
        driverItems: data
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  handleClick(e) {
    console.log('click!');
    fetch('http://localhost:8080/raceInfo?name='+this.props.name+'&year=2022')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        raceInfoIsLoaded: true,
        raceItems: data
      })
    });

  }

  render() {
    console.log('rendering driver');
    let image;
    if (this.props.name === 'Pierre Gasly') {
      image = <img src={gaslyPhoto}/>
    } else if (this.props.name === 'Yuki Tsunoda') {
      image = <img src={tsunodaPhoto}/>
    }

    if (this.state.driverInfoIsLoaded && !this.state.raceInfoIsLoaded) {
      return (
        <div id="driver">
          {image}
          <h3>{this.props.name}</h3>
          <DriverInfo driverInfo={this.state.driverItems.Drivers[0]}/>
          <button onClick={this.handleClick}>Race Info</button>
        </div>
      )
    } else if (this.state.driverInfoIsLoaded && this.state.raceInfoIsLoaded) {
      return (
        <div id="driver">
          {image}
          <h3>{this.props.name}</h3>
          <DriverInfo driverInfo={this.state.driverItems.Drivers[0]}/>
          <button onClick={this.handleClick}>Race Info</button>
          <RaceInfo raceInfo={this.state.raceItems}/>
        </div>
      )
    }

    return (
      <div id="driver">
        <h3>{this.props.name}</h3>
      </div>
    );

  }
}

export default Driver;