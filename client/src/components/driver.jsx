import React from 'react';
import DriverInfo from './DriverInfo.jsx';
import RaceInfo from './RaceInfo.jsx';
import TwitterInfo from './TwitterInfo.jsx';
import gaslyPhoto from '../images/gasly.png';
import tsunodaPhoto from '../images/tsunoda.png';

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      driverInfoIsLoaded: false,
      raceInfoIsLoaded: false,
      twitterInfoIsLoaded: false,
      driverItems: [],
      raceItems: [],
      twitterItems: []
    }

    this.handleRaceInfoClick = this.handleRaceInfoClick.bind(this);
    this.handleTwitterInfoClick = this.handleTwitterInfoClick.bind(this);
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

  handleRaceInfoClick(e) {
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

  handleTwitterInfoClick(e) {
    console.log('click!');
    fetch('http://localhost:8080/twitterInfo?id='+this.props.twitter)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        twitterInfoIsLoaded: true,
        twitterItems: data
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
          <button onClick={this.handleRaceInfoClick}>Race Info</button>
          <button onClick={this.handleTwitterInfoClick}>Twitter Info</button>
        </div>
      )
    } else if (this.state.driverInfoIsLoaded && this.state.raceInfoIsLoaded && !this.state.twitterInfoIsLoaded) {
      return (
        <div id="driver">
          {image}
          <h3>{this.props.name}</h3>
          <DriverInfo driverInfo={this.state.driverItems.Drivers[0]}/>
          <button onClick={this.handleRaceInfoClick}>Race Info</button>
          <button onClick={this.handleTwitterInfoClick}>Twitter Info</button>
          <RaceInfo raceInfo={this.state.raceItems}/>
        </div>
      )
    } else if (this.state.driverInfoIsLoaded && this.state.raceInfoIsLoaded && this.state.twitterInfoIsLoaded) {
      return (
        <div id="driver">
          {image}
          <h3>{this.props.name}</h3>
          <DriverInfo driverInfo={this.state.driverItems.Drivers[0]}/>
          <button onClick={this.handleRaceInfoClick}>Race Info</button>
          <RaceInfo raceInfo={this.state.raceItems}/>
          <button onClick={this.handleTwitterInfoClick}>Twitter Info</button>
          <TwitterInfo twitterData={this.state.twitterItems}/>
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