import React from 'react';

const CurrentRoll = (props) => {
  return (
    <div>
      <h3>Current roll</h3>
      {props.current && props.current.map((roll, i) => <img src={roll.img} key={i} alt="" />)}
    </div>
  )
}

export default CurrentRoll;