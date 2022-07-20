import React from 'react';
import Driver from './driver.jsx';

function DriverList(props) {

  return (
    <div>
      <h3>Driver List Component</h3>
      <ul>
        {props.drivers.map(driver => {
          return (
            <Driver key={driver.id} name={driver.name}/>
          )
        })}
      </ul>
    </div>
  )

}

export default DriverList;