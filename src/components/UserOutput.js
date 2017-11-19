import React from 'react';
import './style/UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h1>Pargraph: {props.paragraph}</h1>
      <p>I'm {props.username}</p>
      <hr />
      <p>My Name is {props.username}</p>
    </div>
  );
}

export default userOutput;
