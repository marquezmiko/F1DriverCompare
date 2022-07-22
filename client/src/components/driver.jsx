import React from 'react';
// import {apiCaller} from '../api-caller.js';

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
    }
    );
  }

  handleClick() {
    console.log('click!');

    apiCaller('website',this.props.name)
    .then((data) => {
      console.log('api response: ' + JSON.stringify(data));
    });

  }

  render() {
    return (
      <div id="driver">
        {/* <ul onClick={this.handleClick}>{this.props.name}</ul> */}
        <ul>{this.props.name}</ul>
      </div>
    )
  }
}

export default Driver;