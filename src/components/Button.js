import React, {Fragment} from 'react';

const Button = (props) => (
  <Fragment>
    <button onClick={props.probability}>
      {props.desc}
    </button>
  </Fragment>
)

export default Button;