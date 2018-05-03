import React from "react";

const Panel = (props) => {
  return (
    <div>
      <button 
        onClick={() => {
          props.clearState()
          props.onClick(props.tabIndex);
        }}
      >
      {props.title}
      </button>
    </div>
  )
}

export default Panel;