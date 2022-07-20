import React from 'react';
import reactDom from 'react-dom';
import DriverList from './components/DriverList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drivers: [
        {id: 1, name:'Pierre Gasly'},
        {id: 2, name:'Yuki Tsunoda'}
      ]
    }
  }

  componentDidMount() {
    console.log('initial mount');
  }

  render () {
    return (
      <div>
        <h1>F1 Socials</h1>
        <DriverList drivers={this.state.drivers}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));