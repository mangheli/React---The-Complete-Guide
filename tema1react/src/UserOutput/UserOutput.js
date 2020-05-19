import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
      <div className = 'UserOutput'>
        <p>My username is: {props.name}</p>
        <p>My age is secret.</p>
      </div>
    )
}

export default userOutput;      