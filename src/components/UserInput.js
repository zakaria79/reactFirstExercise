import React from 'react';
import './style/UserInput.css';

const style = {
  padding: '1rem',
  fontSize: '2rem'
};

const userInput = (props) => {
  return (
    <div className="UserInput">
      <input
        style={style}
        type="text"
        onChange={props.chanded}
        value={props.username}
        />
    </div>
  );
}

export default userInput;
