import React from 'react';
import DriverInfo from './DriverInfo.jsx';
import RaceInfo from './RaceInfo.jsx';
import TwitterInfo from './TwitterInfo.jsx';

//Local photos for now
import gaslyPhoto from '../images/gasly.png';
import tsunodaPhoto from '../images/tsunoda.png';
import ricciardoPhoto from '../images/ricciardo.png';

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
      twitterItems: [],
      raceYear: ""
    }

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    console.log('rendering driver');
    let image;
    if (this.props.name === 'Pierre Gasly') {
      image = <img src={gaslyPhoto}/>
    } else if (this.props.name === 'Yuki Tsunoda') {
      image = <img src={tsunodaPhoto}/>
    } else if (this.props.name === 'Daniel Ricciardo') {
      image = <img src={ricciardoPhoto}/>
    }

    if (this.state.driverInfoIsLoaded && !this.state.raceInfoIsLoaded) {
      return (
        <div id="driver">
          {image}
          <h3>{this.props.name}</h3>
          <DriverInfo driverInfo={this.state.driverItems.Drivers[0]}/>
          {/* <input type="text" value={this.state.raceYear} onChange={this.handleChange} /> */}
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
          <RaceInfo raceInfo={this.state.raceItems}/>
          <button onClick={this.handleTwitterInfoClick}>Twitter Info</button>
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