import React from 'react';

const PreviousRolls = (props) => {
  return (
    <div>
      <h3>Previous 15 rolls</h3>
      {props.prev && props.prev.map((roll, i) => <img src={roll.img} key={i} alt="" width="75" />)}
      <div></div>
    </div>
  )
}

export default PreviousRolls;