import React from 'react';
import reactDom from 'react-dom';
import DriverList from './components/DriverList.jsx';
import "@fontsource/titillium-web";

import guentherPhoto from './images/guenther.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drivers: [
        {id: 1, name:'Pierre Gasly', twitter: '537951506'},
        {id: 2, name:'Yuki Tsunoda', twitter: '759658867177299972'},
        {id: 3, name:'Daniel Ricciardo', twitter: '214413743'}
      ]
    }
  }

  componentDidMount() {
    console.log('initial mount');
  }

  render () {
    return (
      <div>
        <h1 id="title">F1 Head-to-Head</h1>
        <img id="guenther" src={guentherPhoto}/>
        <DriverList drivers={this.state.drivers}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));