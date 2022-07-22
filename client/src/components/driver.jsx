import React from 'react';
import DriverInfo from './DriverInfo.jsx';

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
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
      console.log('JSX WORLD: ' + JSON.stringify(data));
      this.setState({
        isLoaded: true,
        items: data
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
    .then(() => {
      console.log('Driver promise chain complete');
    });
  }

  handleClick() {
    console.log('click!');

    apiCaller('website',this.props.name)
    .then((data) => {
      console.log('api response: ' + JSON.stringify(data));
    });

  }

  render() {
    console.log('rendering driver');
    if (this.state.isLoaded) {
      return (
        <div id="driver">
        {this.props.name}
          <DriverInfo driverInfo={this.state.items.Drivers[0]}/>
        </div>
      )
    }
    return (
      <div id="driver">
        {this.props.name}
      </div>
    );

  }
}

export default Driver;