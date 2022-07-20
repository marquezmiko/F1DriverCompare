import React from 'react';

const DriverList = (props) => (
  <div>
    <h3>Driver List Component</h3>
    <ul>
      {props.drivers.map(driver => {
        return (
          <li key={driver.id}>
            {driver.name}
          </li>
        )
      })}
    </ul>
  </div>
)

export default DriverList;