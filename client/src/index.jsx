import React from 'react';
import reactDom from 'react-dom';
import DriverList from './components/DriverList.jsx';
import "@fontsource/titillium-web";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drivers: [
        {id: 1, name:'Pierre Gasly', picture:'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png'},
        {id: 2, name:'Yuki Tsunoda', picture:'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col-retina/image.png'}
      ]
    }
  }

  componentDidMount() {
    console.log('initial mount');
  }

  render () {
    return (
      <div>
        <h1>F1 Driver Comparison</h1>
        <DriverList drivers={this.state.drivers}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));