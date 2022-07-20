import React from 'react';
import {apiCaller} from '../api-caller.js';

class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter: null,
      instagram: null,
      tiktok: null
    }

    this.handleClick = this.handleClick.bind(this);
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
        <ul onClick={this.handleClick}>{this.props.name}</ul>
      </div>
    )
  }
}

export default Driver;